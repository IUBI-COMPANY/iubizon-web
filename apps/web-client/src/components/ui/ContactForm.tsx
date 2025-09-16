"use client";
import { ChevronDownIcon } from "lucide-react";
import { ContactFormData } from "@/app/contact/contact";
import { countryCodes } from "@/data-list/country-code";

interface ContactFormProps {
  formData: Partial<ContactFormData>;
  onSetFormData: (newData: Partial<ContactFormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactForm = ({
  formData,
  onSetFormData,
  onSubmit,
}: ContactFormProps) => {
  return (
    <div className="w-full h-screen isolate bg-slate-50 flex flex-col justify-center">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-primary sm:text-3xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-base text-gray-400">
          Déjanos un mensaje para ponernos en contacto contigo.
        </p>
      </div>
      <form onSubmit={onSubmit} method="POST" className="mx-30 mt-10">
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
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-primary outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                value={formData.firstName || ""}
                onChange={(e) => onSetFormData({ firstName: e.target.value })}
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
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-primary outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                value={formData.lastName || ""}
                onChange={(e) => onSetFormData({ lastName: e.target.value })}
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
                name="email"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-primary outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                value={formData.email || ""}
                onChange={(e) => onSetFormData({ email: e.target.value })}
                required
              />
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
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="phoneCode"
                    name="phoneCode"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    value={formData.phone?.phoneCode || ""}
                    onChange={(e) =>
                      onSetFormData({
                        phone: {
                          phoneCode: e.target.value,
                          numberPhone: formData.phone?.numberPhone || "",
                        },
                      })
                    }
                    required
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
                  id="numberPhone"
                  name="numberPhone"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-primary placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  value={formData.phone?.numberPhone || ""}
                  onChange={(e) =>
                    onSetFormData({
                      phone: {
                        phoneCode: formData.phone?.phoneCode || "",
                        numberPhone: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
            </div>
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
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 px-3.5 py-2 text-base text-primary outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                value={formData.message || ""}
                onChange={(e) => onSetFormData({ message: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white outline-1 -outline-offset-1 outline-gray-300 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                  checked={formData.agreeToPolicies || false}
                  onChange={(e) =>
                    onSetFormData({ agreeToPolicies: e.target.checked })
                  }
                  required
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
