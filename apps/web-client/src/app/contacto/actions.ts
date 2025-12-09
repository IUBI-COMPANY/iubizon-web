"use server";
import { redirect } from "next/navigation";

export async function sendContactEmail(
  formContact: Omit<Contact, "hostname">,
): Promise<void> {
  const mapFormContact = (formContact: Omit<Contact, "hostname">) => ({
    contact: {
      firstName: formContact?.firstName,
      lastName: formContact?.lastName,
      email: formContact.email,
      phone: {
        number: formContact.phone?.number,
        countryCode: formContact.phone?.prefix,
      },
      message: formContact?.message,
      termsAndConditions: formContact.termsAndConditions,
      hostname: "iubizon.com",
    },
  });

  try {
    const response = await fetch(
      `https://api-iubisales.web.app/emails/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapFormContact(formContact)),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    redirect("/contacto/exitoso");
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
}
