"use server";

export async function sendRepairEmail(formRepair: Repair): Promise<void> {
  const mapFormContact = (formRepair: Repair) => ({
    full_name:
      `${formRepair?.first_name || ""} ${formRepair?.last_name || ""}`.trim(),
    first_name: formRepair?.first_name,
    last_name: formRepair?.last_name,
    email: formRepair.email,
    phone_prefix: formRepair?.phone_prefix,
    phone_number: formRepair?.phone_number,
    product_name: formRepair?.product_name,
    description_device_fault: formRepair?.description_device_fault,
    description_other_fault: formRepair?.description_other_fault,
    service_type: formRepair?.service_type,
    visit_date: formRepair?.visit_date,
    visit_time: formRepair?.visit_time,
    department: formRepair?.department,
    province: formRepair?.province,
    district: formRepair?.district,
    address: formRepair?.address,
    status: "new_lead",
    terms_and_conditions: formRepair?.terms_and_conditions,
  });

  try {
    const response = await fetch(
      `https://api-iubisales.web.app/iubizon/repairs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapFormContact(formRepair)),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorText}`,
      );
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    console.log("Repair email sent successfully");
  } catch (error) {
    console.error("Error sending repair email: ", error);
    throw error;
  }
}
