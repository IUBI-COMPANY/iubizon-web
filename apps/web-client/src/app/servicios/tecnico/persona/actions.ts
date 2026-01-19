"use server";

export async function sendTechnicalServiceEmail(
  formTechnicalService: TechnicalService,
): Promise<void> {
  const mapTechnicalServiceData = (formTechnicalService: TechnicalService) => ({
    client_type: "retail" as const,
    full_name:
      `${formTechnicalService?.first_name || ""} ${formTechnicalService?.last_name || ""}`.trim(),
    first_name: formTechnicalService?.first_name,
    last_name: formTechnicalService?.last_name,
    email: formTechnicalService.email,
    phone_prefix: formTechnicalService?.phone_prefix,
    phone_number: formTechnicalService?.phone_number,
    product_name: formTechnicalService?.product_name,
    description_device_fault: formTechnicalService?.description_device_fault,
    description_other_fault: formTechnicalService?.description_other_fault,
    service_type: formTechnicalService?.service_type,
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorText}`,
      );
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    console.log("Technical Service email sent successfully");
  } catch (error) {
    console.error("Error sending Technical Service email: ", error);
    throw error;
  }
}
