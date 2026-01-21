"use client";

import React, { useEffect, useRef } from "react";
import * as yup from "yup";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Form } from "@/components/ui/Form";
import { ObjectSchema } from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import countriesISO from "@/data-list/countriesISO.json";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OrganizationRepairStep2 } from "@/components/ui/OrganizationsTechnicalServiceForm";

interface Props {
  globalStep: number;
  repairsFormData: Partial<LeadForIubizon>;
  setRepairsFormData: (data: Partial<LeadForIubizon>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
  current?: number;
  hideControls?: boolean;
}

export const OrganizationInfo = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const previousDocType = useRef<string | undefined>("");

  const schema = yup.object({
    document_type: yup.string().required(),
    document_number: yup
      .string()
      .required()
      .test("is-valid-doc", "Número de documento inválido", function (value) {
        const { document_type } = this.parent;
        if (document_type === "DNI") {
          return /^\d{8}$/.test(value);
        } else if (document_type === "RUC") {
          return /^(10|20)\d{9}$/.test(value);
        }
        return true;
      }),
    full_name_or_social_reason: yup.string().when("document_type", {
      is: "RUC",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    first_name: yup.string().when("document_type", {
      is: "RUC",
      then: (schema) => schema.notRequired(),
      otherwise: (schema) => schema.required(),
    }),
    last_name: yup.string().when("document_type", {
      is: "RUC",
      then: (schema) => schema.notRequired(),
      otherwise: (schema) => schema.required(),
    }),
    email: yup.string().email().required(),
    phone_prefix: yup.string().required(),
    phone_number: yup
      .string()
      .required()
      .test("is-valid-phone", "Número de teléfono inválido", function (value) {
        const { phone_prefix } = this.parent;
        return regexPhoneByCountries(phone_prefix).test(value);
      }),
  }) as ObjectSchema<OrganizationRepairStep2>;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OrganizationRepairStep2>({
    resolver: yupResolver(schema),
    defaultValues: {
      document_type: repairsFormData?.document_type || undefined,
      document_number: repairsFormData?.document_number || "",
      full_name_or_social_reason:
        repairsFormData?.full_name_or_social_reason || "",
      first_name: repairsFormData?.first_name || "",
      last_name: repairsFormData?.last_name || "",
      email: repairsFormData?.email || "",
      phone_prefix: "+51",
      phone_number: repairsFormData?.phone_number || undefined,
    },
  });

  const docType = watch("document_type");
  const isRuc = docType === "RUC";
  const isDni = docType === "DNI";

  // Limpiar campos cuando cambia el tipo de documento
  useEffect(() => {
    // Solo limpiar si hay un cambio real (no en el primer render)
    if (previousDocType.current && previousDocType.current !== docType) {
      // Siempre limpiar el número de documento al cambiar de tipo
      setValue("document_number", "");

      if (docType === "RUC") {
        // Si cambia a RUC, limpiar campos de DNI
        setValue("first_name", "");
        setValue("last_name", "");
      } else if (docType === "DNI") {
        // Si cambia a DNI, limpiar razón social
        setValue("full_name_or_social_reason", "");
      } else {
        // Para otros tipos de documento (CE, PASSPORT, OTHER), limpiar todos
        setValue("first_name", "");
        setValue("last_name", "");
        setValue("full_name_or_social_reason", "");
      }
    }
    // Actualizar el ref con el valor actual
    previousDocType.current = docType;
  }, [docType, setValue]);

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const regexPhoneByCountries = (phone_prefix: string) => {
    const country = countriesISO.find(
      (country) => country.phonePrefix === phone_prefix,
    );
    const regex = country?.regex || "^\\d{4,}$";
    return new RegExp(regex);
  };

  const onSubmit = (formData: OrganizationRepairStep2) => {
    // Si no es RUC, concatenar first_name y last_name en full_name_or_social_reason
    if (formData.document_type !== "RUC") {
      formData.full_name_or_social_reason =
        `${formData.first_name} ${formData.last_name}`.trim();
    }

    setRepairsFormData({ ...repairsFormData, ...formData });
    addLocalStorageData(formData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos de contacto
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-4">
              <div className="sm:col-span-2">
                <Controller
                  name="document_type"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Select
                      label="Tipo de Documento"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="Seleccionar"
                      options={[
                        { label: "RUC", value: "RUC" },
                        { label: "DNI", value: "DNI" },
                        { label: "CE (Carnet de Extranjería)", value: "CE" },
                        { label: "Pasaporte", value: "PASSPORT" },
                        { label: "Otro", value: "OTHER" },
                      ]}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-2">
                <Controller
                  name="document_number"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="N° de Documento"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder={
                        isRuc
                          ? "10XXXXXXXX"
                          : isDni
                            ? "71XXXXX"
                            : "Ingresa el número"
                      }
                    />
                  )}
                />
              </div>
              {isRuc ? (
                <div className="sm:col-span-4">
                  <Controller
                    name="full_name_or_social_reason"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <Input
                        label="Razón Social"
                        name={name}
                        value={value}
                        error={error(name)}
                        helperText={errorMessage(name)}
                        required={required(name)}
                        onChange={onChange}
                        placeholder="EJEMPLO S.A.C."
                      />
                    )}
                  />
                </div>
              ) : (
                <>
                  <div className="sm:col-span-2">
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label="Nombres"
                          name={name}
                          value={value}
                          error={error(name)}
                          helperText={errorMessage(name)}
                          required={required(name)}
                          onChange={onChange}
                          placeholder="Tus nombres"
                        />
                      )}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Controller
                      name="last_name"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label="Apellidos"
                          name={name}
                          value={value}
                          error={error(name)}
                          helperText={errorMessage(name)}
                          required={required(name)}
                          onChange={onChange}
                          placeholder="Tus apellidos"
                        />
                      )}
                    />
                  </div>
                </>
              )}
              <div className="sm:col-span-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Email"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      onChange={onChange}
                      type="email"
                      required={required(name)}
                      placeholder="tucorreo@ejemplo.com"
                    />
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-4">
              <div className="sm:col-span-1">
                <Controller
                  name="phone_prefix"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Select
                      label="Prefijo"
                      placeholder="Selecciona un país"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      options={countriesISO.map((iso) => ({
                        label: `${iso.name} (${iso.phonePrefix})`,
                        value: iso.phonePrefix,
                      }))}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-3">
                <Controller
                  name="phone_number"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <Input
                      label="Teléfono"
                      placeholder="9XXXXXXXX"
                      type="number"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setCurrentStepToLocalStorage(globalStep - 1)}
              >
                <div className="flex gap-2 items-center justify-center">
                  <ArrowLeft /> <span>Atrás</span>
                </div>
              </Button>
              <Button block variant="primary" type="submit">
                <div className="flex gap-2 items-center justify-center">
                  <ArrowRight /> <span>Siguiente</span>
                </div>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
