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
import { OrganizationProductStep2 } from "@/components/ui/OrganizationsProductRequestForm";

interface Props {
  globalStep: number;
  productFormData: Partial<LeadForIubizon>;
  setProductFormData: (data: Partial<LeadForIubizon>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
}

export const OrganizationContactInfo = ({
  globalStep,
  productFormData,
  setProductFormData,
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
  }) as ObjectSchema<OrganizationProductStep2>;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OrganizationProductStep2>({
    resolver: yupResolver(schema),
    defaultValues: {
      document_type: productFormData?.document_type || undefined,
      document_number: productFormData?.document_number || "",
      full_name_or_social_reason:
        productFormData?.full_name_or_social_reason || "",
      first_name: productFormData?.first_name || "",
      last_name: productFormData?.last_name || "",
      email: productFormData?.email || "",
      phone_prefix: "+51",
      phone_number: productFormData?.phone_number || undefined,
    },
  });

  const docType = watch("document_type");
  const isRuc = docType === "RUC";
  const isDni = docType === "DNI";

  // Limpiar campos cuando cambia el tipo de documento
  useEffect(() => {
    if (previousDocType.current && previousDocType.current !== docType) {
      setValue("document_number", "");

      if (docType === "RUC") {
        setValue("first_name", "");
        setValue("last_name", "");
      } else if (docType === "DNI") {
        setValue("full_name_or_social_reason", "");
      } else {
        setValue("first_name", "");
        setValue("last_name", "");
        setValue("full_name_or_social_reason", "");
      }
    }
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

  const onSubmit = (formData: OrganizationProductStep2) => {
    if (formData.document_type !== "RUC") {
      formData.full_name_or_social_reason =
        `${formData.first_name} ${formData.last_name}`.trim();
    }

    setProductFormData({ ...productFormData, ...formData });
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
                      label="Correo Electrónico"
                      name={name}
                      type="email"
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      placeholder="ejemplo@dominio.com"
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono / Celular <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-4">
                    <Controller
                      name="phone_prefix"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Select
                          label=""
                          name={name}
                          value={value}
                          error={error(name)}
                          helperText=""
                          required={required(name)}
                          onChange={onChange}
                          options={countriesISO.map((country) => ({
                            label: `${country.name} ${country.phonePrefix}`,
                            value: country.phonePrefix,
                          }))}
                        />
                      )}
                    />
                  </div>
                  <div className="col-span-8">
                    <Controller
                      name="phone_number"
                      control={control}
                      render={({ field: { onChange, value, name } }) => (
                        <Input
                          label=""
                          name={name}
                          type="tel"
                          value={value}
                          error={error(name)}
                          helperText=""
                          required={required(name)}
                          onChange={onChange}
                          placeholder="XXX XXX XXX"
                        />
                      )}
                    />
                  </div>
                </div>
                {error("phone_number") && (
                  <p className="mt-1 text-sm text-red-600">
                    {errorMessage("phone_number")}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3 mt-4">
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={() => setCurrentStepToLocalStorage(globalStep - 1)}
              >
                <div className="flex gap-2 items-center justify-center">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </div>
              </Button>
              <Button type="submit" size="md">
                <div className="flex gap-2 items-center justify-center">
                  <span className="hidden sm:inline">Continuar</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
