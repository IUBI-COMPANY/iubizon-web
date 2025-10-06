"use server";

export async function sendRepairEmail(formRepair: Repair): Promise<void> {
  const mapFormContact = (formRepair: Repair) => ({
    full_name: formRepair?.first_name || "" + formRepair?.last_name || "",
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
    status: "pending",
    terms_and_conditions: formRepair?.terms_and_conditions,
  });

  try {
    const response = await fetch(
      `${process.env.IUBI_CRM_API}/iubizon/repairs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapFormContact(formRepair)),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}
