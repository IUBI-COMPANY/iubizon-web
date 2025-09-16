"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactFormData } from "./contact";

export default function ContactClientPage() {
  const IUBI_SALES_API = "https://api-iubisales.web.app";

  const mapForm = (_data: ContactFormData) => {
    const _mapForm = {
      contact: {
        fullName: `${_data?.firstName} ${_data?.lastName}`,
        firstName: _data?.firstName,
        lastName: _data?.lastName,
        email: _data.email,
        phone: {
          number: _data.phone?.number,
          countryCode: _data.phone?.countryCode,
        },
        message: _data?.message,
        termsAndConditions: _data.termsAndConditions,
        hostname: "iubizon.com",
      },
    };

    return _mapForm;
  };

  const onSubmit = async (data: ContactFormData) => {
    const newData = mapForm(data);
    try {
      const response = await fetch(`${IUBI_SALES_API}/emails/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      await response;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="min-h-screen h-auto flex flex-col lg:flex-row w-full bg-gray-200">
      <div className="w-full hidden lg:block lg:w-1/2 h-screen ">
        <Image
          src="/images/contactClient.png"
          alt="contacto-proyectores"
          width={700}
          height={1000}
          className="w-full h-full max-h-screen object-cover object-[center_30%]"
        />
      </div>
      <div className="w-full lg:w-1/2 grid place-items-center bg-slate-50">
        <ContactForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}
