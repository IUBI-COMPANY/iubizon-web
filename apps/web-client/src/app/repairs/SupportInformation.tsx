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
import { Checkbox } from "@/components/ui/Checkbox";
import { sendRepairEmail } from "./actions";
import { RepairStep3 } from "@/components/ui/RepairsContactForm";
import { SendIcon } from "lucide-react";

interface Props {
  globalStep: number;
  repairsFormData: Partial<Repair>;
  setRepairsFormData: (data: Partial<Repair>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const SupportInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
  loading,
  setLoading,
}: Props) => {
  const schema: ObjectSchema<RepairStep3> = yup.object({
    service_type: yup.string().required(),
    visit_date: yup.string().when("service_type", {
      is: "house",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    visit_time: yup.string().when("service_type", {
      is: "house",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    district: yup.string().when("service_type", {
      is: "house || shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.required(),
    }),
    address: yup.string().when("service_type", {
      is: "house || shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.required(),
    }),
    department: yup.string().when("service_type", {
      is: "shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.notRequired(),
    }),
    province: yup.string().when("service_type", {
      is: "shipping",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.required(),
    }),
    terms_and_conditions: yup.boolean().required(),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<RepairStep3>({
    resolver: yupResolver(schema),
    defaultValues: {
      service_type: repairsFormData?.service_type || "local",
      visit_date: repairsFormData?.visit_date || "",
      visit_time: repairsFormData?.visit_time || "",
      department: repairsFormData?.department || "",
      province: repairsFormData?.province || "",
      district: repairsFormData?.district || "",
      address: repairsFormData?.address || "",
    },
  });

  const { required, error, errorMessage } = useFormUtils({ errors, schema });

  const isLocalVisit = watch("service_type") === "local";
  const isHouseVisit = watch("service_type") === "house";
  const isShipping = watch("service_type") === "shipping";

  const departmentSelected = watch("department");
  const _departmentSelected = peruUbigeo.find(
    (dep) => dep.name === departmentSelected,
  );
  const provinceSelected = watch("province");
  const _provinceSelected = _departmentSelected?.provinces.find(
    (prov) => prov.name === provinceSelected,
  );

  const districtsByLimaProvince = peruUbigeo[13].provinces[0].districts;

  const onSubmit = async (formData: RepairStep3) => {
    setLoading(true);
    setRepairsFormData({ ...repairsFormData, ...formData });
    setCurrentStepToLocalStorage(globalStep + 1);
    addLocalStorageData(formData);
    const data: Repair = JSON.parse(localStorage.getItem("formData") || "{}");
    try {
      await sendRepairEmail(data);
      localStorage.removeItem("currentStep");
      localStorage.removeItem("formData");
      setLoading(false);
      window.location.href = "/repairs";
    } catch (error) {
      console.error("Error: ", error);
    }
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
                  name="service_type"
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
                          label: "Quiero una visita técnica a mi domicilio",
                          value: "house",
                          message: "Solo para Lima",
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
                        name="visit_date"
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
                        name="visit_time"
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
                              })) ||
                              districtsByLimaProvince.map((dist) => ({
                                value: dist.name,
                                label: dist.name,
                              }))
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
                            placeholder="Av. Huaylas 123"
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
                <div className="sm: col-span-2">
                  <Controller
                    name="terms_and_conditions"
                    control={control}
                    render={({ field: { onChange, value, name } }) => (
                      <Checkbox
                        name={name}
                        checked={value}
                        error={error(name)}
                        helperText={errorMessage(name)}
                        required={required(name)}
                        onChange={onChange}
                      >
                        <div>
                          Acepto los{" "}
                          <a
                            href="#"
                            className="hover:text-slate-800 font-semibold underline"
                          >
                            términos y condiciones
                          </a>
                        </div>
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    block
                    variant="secondary"
                    type="button"
                    disabled={loading}
                    onClick={() => setCurrentStepToLocalStorage(globalStep - 1)}
                  >
                    Atrás
                  </Button>
                  <Button
                    block
                    variant="primary"
                    type="submit"
                    loading={loading}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      <SendIcon /> <span>Enviar solicitud</span>
                    </div>
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
