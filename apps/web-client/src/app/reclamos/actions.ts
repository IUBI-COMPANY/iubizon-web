"use server";

const API_URL = "https://api-iubisales.web.app/claims";

const mapFormReclamation = (formReclamation: ClaimFormData) => ({
  reclamation: {
    fullName: formReclamation.full_name,
    documentType: formReclamation.document_type,
    documentNumber: formReclamation.document_id,
    email: formReclamation.email,
    phone: {
      number: formReclamation.phone?.number,
      countryCode: formReclamation.phone?.prefix,
    },
    address: formReclamation.address,
    incidentDate: formReclamation.incident_date,
    incidentTime: formReclamation.incident_time,
    purchaseDate: formReclamation.purchase_date,
    invoiceNumber: formReclamation.invoice_number,
    claimMotive: formReclamation.claim_motive,
    productServiceDescription: formReclamation.product_service_description,
    problemDescription: formReclamation.problem_description,
    claimedAmount: formReclamation.claimed_amount,
    requestedSolution: formReclamation.requested_solution,
    hostname: "iubizon.com",
  },
    client_id:"gYn8QUB8g35wEAZcZz7D"

});

export async function sendReclamation(
  formReclamation: ClaimFormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mapFormReclamation(formReclamation)),
    });

    if (!response.ok) {
      const message = await response.text();
      console.error(`HTTP error! status: ${response.status}`);
      return {
        success: false,
        error: message || `Error al registrar el reclamo. Código: ${response.status}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending reclamation: ", error);
    return {
      success: false,
      error: "Ocurrió un problema al enviar el reclamo. Por favor, intenta nuevamente.",
    };
  }
}
