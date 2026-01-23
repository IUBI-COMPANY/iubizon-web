"use server";

export async function sendProductRequestEmail(
  formProductRequest: LeadForIubizon,
): Promise<void> {
  const mapProductRequestData = (formProductRequest: LeadForIubizon) => ({
    client_id: "gYn8QUB8g35wEAZcZz7D",
    client_type: "organization",
    lead_type: "sale",
    document_type: formProductRequest?.document_type,
    document_number: formProductRequest?.document_number,
    full_name_or_social_reason: formProductRequest?.full_name_or_social_reason,
    first_name: formProductRequest?.first_name,
    last_name: formProductRequest?.last_name,
    email: formProductRequest.email,
    phone_prefix: formProductRequest?.phone_prefix,
    phone_number: formProductRequest?.phone_number,
    product_list: formProductRequest?.product_list,
    description_more_details: formProductRequest?.description_more_details,
    attendance_type: formProductRequest?.attendance_type,
    visit_date: formProductRequest?.visit_date,
    visit_time: formProductRequest?.visit_time,
    department: formProductRequest?.department,
    province: formProductRequest?.province,
    district: formProductRequest?.district,
    address: formProductRequest?.address,
    status: "new_lead",
    terms_and_conditions: formProductRequest?.terms_and_conditions,
    archived: false,
    createdBy: "user",
  });

  try {
    const response = await fetch(
      `https://api-iubisales.web.app/iubizon/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapProductRequestData(formProductRequest)),
      },
    );

    const responseText = await response.text();

    if (!response.ok) {
      console.error(
        `HTTP error! status: ${response.status}, message: ${responseText}`,
      );
      throw new Error(`Error ${response.status}: ${responseText}`);
    }

    console.log("Product request email sent successfully:", responseText);
  } catch (error) {
    console.error("Error sending product request email: ", error);
    throw error;
  }
}
