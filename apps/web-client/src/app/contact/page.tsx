"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { sendContactEmail } from "@/app/contact/actions";

export default function ContactClientPage() {
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
        <ContactForm serverActionSendContactEmail={sendContactEmail} />
      </div>
    </div>
  );
}
