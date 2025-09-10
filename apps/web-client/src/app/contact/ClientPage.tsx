"use client";

import { useState } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactFormData } from "./contact";

export default function ContactClientPage() {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});

  const onSetFormData = (newData: Partial<ContactFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData:", formData);
  };

  return (
    <div className="min-h-screen h-auto flex flex-col lg:flex-row w-full bg-gray-200">
      <div className="w-1/2 h-screen">
        <Image
          src="/images/contactClient.png"
          alt="contacto-proyectores"
          width={700}
          height={1000}
          className="w-full h-full max-h-screen object-cover object-[center_30%]"
        />
      </div>
      <div className="w-1/2 grid place-items-center">
        <ContactForm
          formData={formData}
          onSetFormData={onSetFormData}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
