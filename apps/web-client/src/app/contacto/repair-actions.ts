"use server";
import { redirect } from "next/navigation";

interface RepairRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: Phone;
  projectorBrand: string;
  projectorModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  district: string;
  city: string;
  termsAndConditions: boolean;
  hostname?: string;
}

export async function sendRepairRequest(
  formRepair: Omit<RepairRequest, "hostname">,
): Promise<void> {
  const mapFormRepair = (formRepair: Omit<RepairRequest, "hostname">) => ({
    repairRequest: {
      firstName: formRepair?.firstName,
      lastName: formRepair?.lastName,
      email: formRepair.email,
      phone: {
        number: formRepair.phone?.number,
        countryCode: formRepair.phone?.prefix,
      },
      projectorBrand: formRepair.projectorBrand,
      projectorModel: formRepair.projectorModel,
      issueDescription: formRepair.issueDescription,
      preferredDate: formRepair.preferredDate,
      preferredTime: formRepair.preferredTime,
      address: formRepair.address,
      district: formRepair.district,
      city: formRepair.city,
      termsAndConditions: formRepair.termsAndConditions,
      hostname: "iubizon.com",
    },
  });

  try {
    const response = await fetch(
      `${process.env.IUBI_CRM_API}/emails/repair-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapFormRepair(formRepair)),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    redirect("/reparaciones/exitoso");
  } catch (error) {
    console.error("Error sending repair request: ", error);
    throw error;
  }
}
