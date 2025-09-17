import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function SuccessContactPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="m-auto flex flex-col items-center justify-center">
        <h2>Mensaje enviadode manera exitosa!</h2>
        <p>Le enviaremos un email a la brevedad</p>
        <Link
          href="/"
          className="bg-primary py-3 px-10 mx-auto rounded-2xl text-white flex gap-3 cursor-pointer"
        >
          <HomeIcon /> Ir a la página de inicio
        </Link>
      </div>
    </div>
  );
}
