"use server";

export async function sendTechnicalServiceEmail(
  formTechnicalService: LeadForIubizon,
): Promise<void> {
  const mapTechnicalServiceData = (formTechnicalService: LeadForIubizon) => ({
    client_type: "organization",
    lead_type: "technical_service",
    document_type: formTechnicalService?.document_type,
    document_number: formTechnicalService?.document_number,
    full_name_or_social_reason:
      formTechnicalService?.full_name_or_social_reason,
    first_name: formTechnicalService?.first_name,
    last_name: formTechnicalService?.last_name,
    email: formTechnicalService.email,
    phone_prefix: formTechnicalService?.phone_prefix,
    phone_number: formTechnicalService?.phone_number,
    quantity: formTechnicalService?.quantity,
    product_name: formTechnicalService?.product_name,
    service_type: formTechnicalService?.service_type,
    description_more_details: formTechnicalService?.description_more_details,
    attendance_type: formTechnicalService?.attendance_type,
    visit_date: formTechnicalService?.visit_date,
    visit_time: formTechnicalService?.visit_time,
    department: formTechnicalService?.department,
    province: formTechnicalService?.province,
    district: formTechnicalService?.district,
    address: formTechnicalService?.address,
    status: "new_lead",
    terms_and_conditions: formTechnicalService?.terms_and_conditions,
    archived: false,
    createdBy: "user",
  });

  try {
    const response = await fetch(
      `https://api-iubisales.web.app/iubizon/services/technical`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapTechnicalServiceData(formTechnicalService)),
      },
    );

    // Primero obtenemos el texto de la respuesta
    const responseText = await response.text();

    if (!response.ok) {
      console.error(
        `HTTP error! status: ${response.status}, message: ${responseText}`,
      );
      throw new Error(`Error ${response.status}: ${responseText}`);
    }

    console.log("Technical Service email sent successfully:", responseText);
  } catch (error) {
    console.error("Error sending Technical Service email: ", error);
    throw error;
  }
}
