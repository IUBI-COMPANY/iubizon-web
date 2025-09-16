"use client";
import { useForm } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";
import { ContactFormData } from "@/app/contact/contact";
import { countryCodes } from "@/data-list/country-code";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      phone: { countryCode: "51" },
    },
  });

  return (
    <div className="w-full h-screen isolate bg-slate-50 flex flex-col justify-center my-15 sm:my-10 md:my-5 lg:my-0">
      <div className=" text-center mx-10">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-primary sm:text-3xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-base text-gray-400">
          Déjanos un mensaje para ponernos en contacto contigo.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="mx-10 md:mx-20 xl:mx-30 mt-10 "
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-semibold text-primary"
            >
              Nombres
            </label>
            <div className="mt-1.5">
              <input
                id="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                {...register("firstName")}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm/6 font-semibold text-primary"
            >
              Apellidos
            </label>
            <div className="mt-1.5">
              <input
                id="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-primary"
            >
              Correo Electrónico
            </label>
            <div className="mt-1.5">
              <input
                id="email"
                type="text"
                autoComplete="email"
                className={`block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 ${
                  errors.email
                    ? "focus:outline-red-500 border border-red-500"
                    : " focus:outline-indigo-500 "
                }`}
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value:
                      /^[A-Za-z0-9._%+-ñÑ]+@[A-Za-z0-9.-ñÑ]+\.[A-Za-zñÑ]{2,}$/,
                    message: "Formato de correo inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-primary"
            >
              Número de teléfono
            </label>
            <div className="mt-1.5">
              <div
                className={`flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ${errors.phone?.number ? "has-[input:focus-within]:outline-red-500 border border-red-500" : " has-[input:focus-within]:outline-indigo-500 "} `}
              >
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="countryCode"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                    {...register("phone.countryCode", {
                      required: "Selecciona el código de país",
                    })}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.id} value={country.code}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                  />
                </div>
                <input
                  id="number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  {...register("phone.number", {
                    required: "El número de teléfono es obligatorio",
                    valueAsNumber: true,
                    minLength: {
                      value: 8,
                      message: "El número debe tener al menos 8 dígitos",
                    },
                  })}
                />
              </div>
            </div>
            {errors.phone?.number && (
              <p className="text-red-500 text-sm">
                {errors.phone?.number.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-primary"
            >
              Mensaje
            </label>
            <div className="mt-1.5">
              <textarea
                id="message"
                rows={4}
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                {...register("message")}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div
                className={`group relative inline-flex w-8 shrink-0 rounded-full bg-white outline-1 -outline-offset-1 outline-gray-300 p-px inset-ring inset-ring-white/10 outline-offset-2 ${errors.termsAndConditions ? "outline-red-500 border-red-500" : "outline-indigo-500"} transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2`}
              >
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                  {...register("termsAndConditions", {
                    required: "Debes aceptar las políticas",
                  })}
                />
              </div>
            </div>
            <label
              htmlFor="agree-to-policies"
              className="text-sm/6 text-gray-400"
            >
              Al seleccionar, usted acepta nuestras{" "}
              <a
                href="#"
                className="font-semibold whitespace-nowrap text-indigo-400"
              >
                Políticas de Privacidad
              </a>
              .
            </label>
          </div>
          {errors.termsAndConditions && (
            <p className="text-red-500 text-sm">
              {errors.termsAndConditions.message}
            </p>
          )}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Enviar datos
          </button>
        </div>
      </form>
    </div>
  );
};
