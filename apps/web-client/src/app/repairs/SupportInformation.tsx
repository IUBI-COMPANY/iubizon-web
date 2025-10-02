import React from "react";
import { ObjectSchema } from "yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import { Form } from "@/components/ui/Form";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { Button } from "@/components/ui/Button";
import { TimePicker } from "@/components/ui/TimePicker";
import { DatePicker } from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { Alert } from "@/components/ui/Alert";
import { Select } from "@/components/ui/Select";
import { peruUbigeo } from "@/data-list/ubigeos";

interface Props {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  repairsFormData: Partial<RepairsContact>;
  setRepairsFormData: (data: object) => void;
  stepsCompleted: number[];
  setStepsCompleted: (steps: number[]) => void;
  addLocalStorageData: (data: object) => void;
  addStepToLocalStorage: (step: number, steps: number[]) => void;
}

interface SupportFormData {
  serviceType: string;
  visitDate?: string;
  visitTime?: string;
  district?: string;
  address?: string;
  department?: string;
  province?: string;
}

export const SupportInformation = ({
  currentStep,
  setCurrentStep,
  repairsFormData,
  setRepairsFormData,
  stepsCompleted,
  setStepsCompleted,
  addLocalStorageData,
  addStepToLocalStorage,
}: Props) => {
  const schema: ObjectSchema<SupportFormData> = yup.object({
    serviceType: yup.string().required(),
    visitDate: yup.string().when("serviceType", {
      is: "house",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    visitTime: yup.string().when("serviceType", {
      is: "house",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    district: yup.string().when("serviceType", {
      is: "house || shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    address: yup.string().when("serviceType", {
      is: "house || shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    department: yup.string().when("serviceType", {
      is: "shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    province: yup.string().when("serviceType", {
      is: "shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<SupportFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      serviceType: repairsFormData?.service_type || "local",
      visitDate: repairsFormData?.visit_date || "",
      visitTime: repairsFormData?.visit_time || "",
      department: repairsFormData?.department || "",
      province: repairsFormData?.province || "",
      district: repairsFormData?.district || "",
      address: repairsFormData?.address || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  //Validate Service Type
  const isLocalVisit = watch("serviceType") === "local";
  const isHouseVisit = watch("serviceType") === "house";
  const isShipping = watch("serviceType") === "shipping";

  //Validate Department and Province
  const departmentSelected = watch("department");
  const _departmentSelected = peruUbigeo.find(
    (dep) => dep.name === departmentSelected,
  );
  const provinceSelected = watch("province");
  const _provinceSelected = _departmentSelected?.provinces.find(
    (prov) => prov.name === provinceSelected,
  );

  const onSubmit = (formData: SupportFormData) => {
    if (!stepsCompleted.includes(currentStep))
      setStepsCompleted([...stepsCompleted, currentStep]);
    setRepairsFormData({ ...repairsFormData, ...formData });
    addStepToLocalStorage(currentStep + 1, [...stepsCompleted, currentStep]);
    addLocalStorageData(formData);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Tipo de servicio
      </div>
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Controller
                  name="serviceType"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <RadioGroup
                      label="¿Qué tipo de servicio deseas?"
                      name={name}
                      value={value}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      required={required(name)}
                      onChange={onChange}
                      options={[
                        {
                          label: "Quiero ir al local",
                          value: "local",
                        },
                        {
                          label: "Quiero una visita técnica en mi domicilio",
                          value: "house",
                        },
                        {
                          label: "Quiero enviar mi producto al local",
                          value: "shipping",
                          message: "Solo para provincias",
                        },
                      ]}
                    />
                  )}
                />

                {isLocalVisit && (
                  <div className="w-full grid gap-6 my-6">
                    <p className="text-base text-secondary mt-2">
                      Puedes traer tu equipo a nuestro local ubicado en Psje Los
                      Jazmines 121, Chorrillos. Lunes a Viernes de 9:00 AM a
                      6:00 PM y sábados de 10:00 AM a 4:00 PM.
                    </p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.71337159212857!2d-77.01877893930197!3d-12.181314674423286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b77bc923c7dd%3A0xc9a1cab224d7580f!2sPje.%20los%20Jazmines%20121%2C%20Chorrillos%2015066!5e0!3m2!1ses!2spe!4v1758727743550!5m2!1ses!2spe"
                      width="600"
                      height="450"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full "
                    ></iframe>
                  </div>
                )}
                {isHouseVisit && (
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 my-6">
                    <div className="sm:col-span-1">
                      <Controller
                        name="visitDate"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <DatePicker
                            label="Dinos qué día podemos visitarte"
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
                    <div className="sm:col-span-1">
                      <Controller
                        name="visitTime"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <TimePicker
                            label="Dinos a qué hora podemos visitarte"
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
                )}
                {isShipping && (
                  <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2 my-6">
                    <Alert
                      type="info"
                      message="Estos datos servirán para el envío de su equipo una vez terminado el servicio."
                    />
                    <div className="sm:col-span-1">
                      <Controller
                        name="department"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Select
                            label="Departamento"
                            placeholder="Ej. Lima"
                            name={name}
                            value={value}
                            error={error(name)}
                            helperText={errorMessage(name)}
                            required={required(name)}
                            onChange={onChange}
                            options={peruUbigeo.map((dep) => ({
                              value: dep.name,
                              label: dep.name,
                            }))}
                          />
                        )}
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <Controller
                        name="province"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Select
                            label="Provincia"
                            placeholder="Ej. Lima"
                            name={name}
                            value={value}
                            error={error(name)}
                            helperText={errorMessage(name)}
                            required={required(name)}
                            onChange={onChange}
                            options={
                              _departmentSelected?.provinces.map((prov) => ({
                                value: prov.name,
                                label: prov.name,
                              })) || []
                            }
                          />
                        )}
                      />
                    </div>
                  </div>
                )}
                {(isHouseVisit || isShipping) && (
                  <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6 my-6">
                    <div className="sm: col-span-2">
                      <Controller
                        name="district"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Select
                            label="Distrito"
                            placeholder="Ej. Chorrillos"
                            name={name}
                            value={value}
                            error={error(name)}
                            helperText={errorMessage(name)}
                            required={required(name)}
                            onChange={onChange}
                            options={
                              _provinceSelected?.districts.map((dist) => ({
                                value: dist.name,
                                label: dist.name,
                              })) || []
                            }
                          />
                        )}
                      />
                    </div>
                    <div className="sm: col-span-4">
                      <Controller
                        name="address"
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                          <Input
                            label="Dirección"
                            placeholder="Av. Ejemplo 123"
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
                )}
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    block
                    variant="secondary"
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Atrás
                  </Button>
                  <Button block variant="primary" type="submit">
                    {currentStep === 2 ? "Finalizar" : "Siguiente"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
