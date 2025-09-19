"use client";

import { useMemo, useState } from "react";
import { Steps } from "@/components/ui/Steps";
import { Input } from "@/components/ui/Input";
import { Search, User, Users } from "lucide-react";
import { Form } from "@/components/ui/Form";

export const RepairsContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    issue: "",
  });

  const handleChange = (key: keyof typeof form) => (value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  const items = useMemo(
    () => [
      {
        key: "contact",
        title: "Datos de contacto",
        icon: <User />,
        description: "Cuéntanos cómo contactarte para coordinar tu reparación.",
        content: (
          <div className="mx-auto mt-6 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Input
                  name="name"
                  label="Nombres completos"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                  placeholder="Tu nombre y apellidos"
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  name="phone"
                  type="tel"
                  label="Teléfono"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="9XXXXXXXX"
                  autoComplete="tel"
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "device",
        title: "Datos del equipo",
        icon: <Users />,
        description:
          "Cuéntanos sobre tu proyector para brindarte una mejor atención.",
        content: (
          <div className="mx-auto mt-6 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Input
                  name="brand"
                  label="Marca"
                  value={form.brand}
                  onChange={handleChange("brand")}
                  required
                  placeholder="Epson, BenQ, Optoma, etc."
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  name="model"
                  label="Modelo"
                  value={form.model}
                  onChange={handleChange("model")}
                  required
                  placeholder="Ej. PowerLite X05"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm/6 font-semibold text-secondary mb-1.5">
                  Describe la falla
                </label>
                <textarea
                  name="issue"
                  value={form.issue}
                  onChange={(e) => handleChange("issue")(e.target.value)}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-600 placeholder:text-gray-500 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary/70 hover:outline-gray-400"
                  rows={4}
                  placeholder="Ej. No enciende, se apaga solo, manchas en la imagen, etc."
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "confirm",
        title: "Confirmación",
        icon: <Search />,
        description: "Revisa que tus datos sean correctos antes de enviar.",
        content: (
          <div className="mx-auto mt-6 max-w-xl text-secondary/90">
            <ul className="space-y-2">
              <li>
                <strong>Nombre:</strong> {form.name || "-"}
              </li>
              <li>
                <strong>Email:</strong> {form.email || "-"}
              </li>
              <li>
                <strong>Teléfono:</strong> {form.phone || "-"}
              </li>
              <li>
                <strong>Marca:</strong> {form.brand || "-"}
              </li>
              <li>
                <strong>Modelo:</strong> {form.model || "-"}
              </li>
              <li>
                <strong>Falla:</strong> {form.issue || "-"}
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Al finalizar, nos pondremos en contacto contigo para coordinar la
              evaluación del equipo.
            </p>
          </div>
        ),
      },
    ],
    [form],
  );

  return (
    <div className="w-full max-w-2xl mx-auto shadow-lg my-10 py-10 px-6 rounded-2xl bg-white">
      <Form>
        <Steps items={items} />
      </Form>
    </div>
  );
};
