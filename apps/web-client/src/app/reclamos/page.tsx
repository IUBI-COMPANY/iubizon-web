"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ReclamationFormData {
  // Datos del reclamante
  fullName: string;
  documentId: string;
  documentType: string;
  address: string;
  phone: string;
  email: string;

  // Detalles de la reclamación
  incidentDate: string;
  incidentTime: string;
  claimMotive: string; // 'producto' o 'servicio'
  productServiceDescription: string;
  problemDescription: string;
  claimedAmount: string;
  requestedSolution: string;

  // Pruebas
  attachedFiles: FileList;
}

export default function ReclamationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ReclamationFormData>({
    defaultValues: {
      documentType: "DNI",
      claimMotive: "producto",
    },
    mode: "onBlur",
  });

  const claimMotive = watch("claimMotive");

  const [reclamationNumber, setReclamationNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<ReclamationFormData> = (data) => {
    // Generar número de reclamo único
    const number = `REC-${Date.now()}-${Math.random().toString(36).slice(2, 11).toUpperCase()}`;
    setReclamationNumber(number);
    setSubmitted(true);

    // Aquí irá la lógica para enviar los datos al servidor
    console.log("Formulario enviado:", data);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10 p-6">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-2xl p-8 border border-green-300">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            ¡Reclamo Registrado Exitosamente!
          </h2>
          <p className="text-lg text-foreground mb-6">
            Tu reclamo ha sido recibido y será procesado en breve.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600 mb-2">
              Número de reclamo (guarda este código como tu comprobante):
            </p>
            <p className="text-2xl font-bold text-secondary">
              {reclamationNumber}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Te contactaremos a través del email y teléfono proporcionados dentro
            de 5 días hábiles.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              reset();
            }}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Enviar Otro Reclamo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 p-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Libro de Reclamaciones
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg leading-relaxed text-foreground">
            Formulario oficial para presentar tus reclamos y quejas. Por favor,
            completa todos los campos con información verídica.
          </p>
        </div>

        {/* INFORMACIÓN DE LA EMPRESA */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-secondary mb-4">
            Datos de la Empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 font-semibold">Razón Social:</p>
              <p className="text-secondary">IUBIZON COMPANY SAC</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">RUC:</p>
              <p className="text-secondary">20614600374</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-600 font-semibold">Dirección:</p>
              <p className="text-secondary">
                Calle las acacias, Pje. los Jazmines 181, Chorrillos, Lima
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Teléfono:</p>
              <p className="text-secondary">972 300 301</p>
            </div>
            <div>
              <p className="text-gray-600 font-semibold">Horario:</p>
              <p className="text-secondary">Lun-Vie 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* SECCIÓN 1: DATOS DEL RECLAMANTE */}
            <div className="border-b pb-6">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                1. Datos del Reclamante
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="fullName"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName", {
                      required: "El nombre completo es requerido",
                      minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="documentType"
                  >
                    Tipo de Documento *
                  </label>
                  <select
                    id="documentType"
                    {...register("documentType", {
                      required: "Selecciona un tipo de documento",
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.documentType ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="DNI">DNI</option>
                    <option value="NIE">NIE</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="CE">Cédula de Extranjería</option>
                  </select>
                  {errors.documentType && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.documentType.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="documentId"
                  >
                    Número de Documento *
                  </label>
                  <input
                    type="text"
                    id="documentId"
                    {...register("documentId", {
                      required: "El número de documento es requerido",
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.documentId ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Ej: 12345678"
                  />
                  {errors.documentId && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.documentId.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="phone"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "El teléfono es requerido",
                      pattern: {
                        value: /^[+]?[0-9]{9,15}$/,
                        message: "Ingresa un teléfono válido",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Ej: +51987654321"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="email"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "El correo electrónico es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ingresa un correo válido",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="tuemail@ejemplo.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="address"
                  >
                    Dirección Domiciliaria *
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", {
                      required: "La dirección es requerida",
                      minLength: {
                        value: 5,
                        message:
                          "La dirección debe tener al menos 5 caracteres",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Tu domicilio actual y habitual"
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: DETALLES DE LA RECLAMACIÓN */}
            <div className="border-b pb-6">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                2. Detalles de la Reclamación
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="incidentDate"
                  >
                    Fecha del Incidente *
                  </label>
                  <input
                    type="date"
                    id="incidentDate"
                    {...register("incidentDate", {
                      required: "La fecha del incidente es requerida",
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.incidentDate ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.incidentDate && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.incidentDate.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="incidentTime"
                  >
                    Hora del Incidente
                  </label>
                  <input
                    type="time"
                    id="incidentTime"
                    {...register("incidentTime")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="claimMotive"
                  >
                    Motivo del Reclamo *
                  </label>
                  <select
                    id="claimMotive"
                    {...register("claimMotive", {
                      required: "Selecciona un motivo",
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.claimMotive ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="producto">Producto</option>
                    <option value="servicio">Servicio</option>
                  </select>
                  {errors.claimMotive && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.claimMotive.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="productServiceDescription"
                  >
                    {claimMotive === "producto"
                      ? "Especifica el Producto"
                      : "Especifica el Servicio"}{" "}
                    *
                  </label>
                  <input
                    type="text"
                    id="productServiceDescription"
                    {...register("productServiceDescription", {
                      required: `${claimMotive === "producto" ? "El producto" : "El servicio"} es requerido`,
                      minLength: {
                        value: 3,
                        message: "Proporciona más detalles",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.productServiceDescription ? "border-red-500" : "border-gray-300"}`}
                    placeholder={
                      claimMotive === "producto"
                        ? "Ej: Proyector Epson PowerLite 980W, Número de serie, etc."
                        : "Ej: Reparación de proyector, Instalación, Mantenimiento, etc."
                    }
                  />
                  {errors.productServiceDescription && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.productServiceDescription.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="problemDescription"
                  >
                    Descripción del Problema *
                  </label>
                  <textarea
                    id="problemDescription"
                    {...register("problemDescription", {
                      required: "Describe el problema",
                      minLength: {
                        value: 10,
                        message:
                          "La descripción debe tener al menos 10 caracteres",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 ${errors.problemDescription ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Describe los hechos de manera clara, concisa y cronológica"
                  />
                  {errors.problemDescription && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.problemDescription.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="claimedAmount"
                  >
                    Monto Reclamado (S/)
                  </label>
                  <input
                    type="number"
                    id="claimedAmount"
                    {...register("claimedAmount", {
                      pattern: {
                        value: /^[0-9]+(\.[0-9]{1,2})?$|^$/,
                        message: "Ingresa un monto válido",
                      },
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.claimedAmount ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Si aplica, monto en soles"
                    step="0.01"
                  />
                  {errors.claimedAmount && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.claimedAmount.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="block text-secondary font-medium mb-2"
                    htmlFor="requestedSolution"
                  >
                    Solución Esperada *
                  </label>
                  <select
                    id="requestedSolution"
                    {...register("requestedSolution", {
                      required: "Selecciona una solución",
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.requestedSolution ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="reembolso">Reembolso</option>
                    <option value="cambio">Cambio de producto</option>
                    <option value="reparacion">Reparación</option>
                    <option value="descuento">Descuento</option>
                    <option value="otro">Otra solución</option>
                  </select>
                  {errors.requestedSolution && (
                    <span className="text-red-500 text-sm mt-1 block">
                      {errors.requestedSolution.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* SECCIÓN 3: PRUEBAS Y DOCUMENTACIÓN */}
            <div className="pb-6">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                3. Pruebas y Documentación
              </h2>

              <div>
                <label
                  className="block text-secondary font-medium mb-2"
                  htmlFor="attachedFiles"
                >
                  Archivos Adjuntos
                </label>
                <input
                  type="file"
                  id="attachedFiles"
                  {...register("attachedFiles")}
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xlsx,.xls"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                <strong>Nota:</strong> Adjunta copias de facturas, fotos,
                videos, correos o cualquier documento que respalde tu reclamo.
                <br />
                <em>Formatos aceptados: PDF, JPG, PNG, DOC, DOCX, XLS, XLSX</em>
              </p>
            </div>

            {/* BOTÓN DE ENVÍO */}
            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-bold text-lg"
              >
                Registrar Reclamo
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Campos obligatorios. Tu número de reclamo será generado tras
                enviar este formulario.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
