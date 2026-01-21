"use server";

const API_URL = "https://api-iubisales.web.app/claims";

const mapFormClaim = (formClaim: LeadForIubizon) => ({
  client_id: "gYn8QUB8g35wEAZcZz7D",
  full_name: formClaim.full_name,
  document_type: formClaim.document_type,
  document_id: formClaim.document_id,
  address: formClaim.address,
  phone_prefix: formClaim.phone_prefix,
  phone_number: formClaim.phone_number,
  email: formClaim.email,
  incident_date: formClaim.incident_date,
  incident_time: formClaim.incident_time,
  purchase_date: formClaim.purchase_date,
  invoice_number: formClaim.invoice_number,
  claim_motive: formClaim.claim_motive,
  product_service_description: formClaim.product_service_description,
  problem_description: formClaim.problem_description,
  claimed_amount: formClaim.claimed_amount,
  requested_solution: formClaim.requested_solution,
  hostname: "iubizon.com",
});

export async function sendReclamation(
  formClaim: LeadForIubizon,
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormClaim(formClaim)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HTTP error! status: ${response.status}`, errorText);
      return {
        success: false,
        error:
          errorText ||
          `Error al registrar el reclamo. Código: ${response.status}`,
      };
    }

    // Si la respuesta es OK, leemos el contenido exitoso
    const responseText = await response.text();
    console.log("Reclamo enviado exitosamente:", responseText);
    return { success: true };
  } catch (error) {
    console.error("Error sending reclamation: ", error);
    return {
      success: false,
      error:
        "Ocurrió un problema al enviar el reclamo. Por favor, intenta nuevamente.",
    };
  }
}
