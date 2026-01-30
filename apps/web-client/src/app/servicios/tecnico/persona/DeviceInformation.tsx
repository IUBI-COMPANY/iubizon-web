import { Form } from "@/components/ui/Form";
import * as yup from "yup";
import { Controller, useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "@/hooks/useFormUtils";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { RepairStep1 } from "@/components/ui/RetailTechnicalServiceForm";
import { ArrowRight } from "lucide-react";
import { TextArea } from "@/components/ui/TextArea";
import {
  TechnicalServiceProductList,
  TechnicalServiceProductListRef,
} from "@/components/ui/TechnicalServiceProductList";

interface TechnicalServiceProduct {
  id: string;
  quantity: number;
  brand: string;
  model: string;
  service_type: ServiceType;
}

interface FormData {
  products: TechnicalServiceProduct[];
  description_more_details?: string;
}

interface Props {
  globalStep: number;
  repairsFormData: Partial<RepairStep1>;
  setRepairsFormData: (data: Partial<RepairStep1>) => void;
  addLocalStorageData: (data: object) => void;
  setCurrentStepToLocalStorage: (step: number) => void;
}

export const DeviceInformation = ({
  globalStep,
  repairsFormData,
  setRepairsFormData,
  addLocalStorageData,
  setCurrentStepToLocalStorage,
}: Props) => {
  const schema = yup.object({
    products: yup
      .array()
      .of(
        yup.object({
          id: yup.string().required(),
          quantity: yup
            .number()
            .required("La cantidad es requerida")
            .min(1, "La cantidad debe ser al menos 1"),
          brand: yup.string().required("La marca es requerida"),
          model: yup.string().required("El modelo es requerido"),
          service_type: yup
            .string()
            .oneOf([
              "maintenance",
              "repair",
              "installation",
              "calibration",
              "cleaning",
              "diagnosis",
              "warranty",
              "training",
              "other",
            ])
            .required("El tipo de servicio es requerido"),
        }),
      )
      .min(1, "Debes agregar al menos un producto")
      .required(),
    description_more_details: yup.string().notRequired(),
  });

  // Inicializar productos desde repairsFormData o crear uno por defecto
  const initialProducts: TechnicalServiceProduct[] =
    repairsFormData?.products && repairsFormData.products.length > 0
      ? repairsFormData.products.map((p) => ({
          id: p.id || crypto.randomUUID(),
          quantity: p.quantity || 1,
          brand: p.brand || "",
          model: p.model || "",
          service_type: p.service_type || "maintenance",
        }))
      : [
          {
            id: crypto.randomUUID(),
            quantity: 1,
            brand: "",
            model: "",
            service_type: "maintenance",
          },
        ];

  const [products, setProducts] =
    useState<TechnicalServiceProduct[]>(initialProducts);

  const productListRef = useRef<TechnicalServiceProductListRef>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    defaultValues: {
      products: initialProducts,
      description_more_details: repairsFormData?.description_more_details || "",
    },
  });

  const { error, errorMessage } = useFormUtils({ errors, schema });

  // Actualizar el form cuando cambian los productos
  React.useEffect(() => {
    setValue("products", products);
  }, [products, setValue]);

  const onSubmit = async (formData: FormData) => {
    console.log("📝 onSubmit llamado con formData:", formData);
    console.log("🔗 productListRef.current:", productListRef.current);

    // Validar productos primero
    if (productListRef.current) {
      console.log("✅ Llamando a validate()");
      const isValid = productListRef.current.validate();
      console.log("📊 Resultado de validación:", isValid);

      if (!isValid) {
        console.log("⛔ Validación falló, no continuando");
        return; // No continuar si hay campos vacíos
      }
    } else {
      console.warn("⚠️ productListRef.current es null");
    }

    console.log("✅ Validación pasó, continuando con el submit");

    const completeFormData: RepairStep1 = {
      products: formData.products.map((p) => ({
        id: p.id,
        quantity: p.quantity,
        brand: p.brand,
        model: p.model,
        type: "technical_service",
        service_type: p.service_type,
      })),
      description_more_details: formData.description_more_details,
    };

    setRepairsFormData({ ...repairsFormData, ...completeFormData });
    addLocalStorageData(completeFormData);
    setCurrentStepToLocalStorage(globalStep + 1);
  };

  return (
    <div className="w-full">
      <div className="text-2xl text-center text-secondary font-semibold">
        Datos del equipo a reparar
      </div>
      <div className="mt-5">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("🎯 Form submit interceptado");

            // Validar productos primero
            if (productListRef.current) {
              const isValid = productListRef.current.validate();
              console.log("📊 Resultado de validación manual:", isValid);

              if (!isValid) {
                console.log("⛔ Validación falló, deteniendo submit");
                return;
              }
            }

            console.log("✅ Validación pasó, ejecutando handleSubmit");
            handleSubmit(onSubmit)(e);
          }}
        >
          <div className="grid gap-6 mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              {/* Lista de Productos */}
              <div>
                <TechnicalServiceProductList
                  ref={productListRef}
                  products={products}
                  onChange={setProducts}
                  errors={
                    errors.products
                      ? Object.fromEntries(
                          Object.entries(errors).map(([key, value]) => [
                            key,
                            value?.message,
                          ]),
                        )
                      : {}
                  }
                />
                {errors.products && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.products.message}
                  </p>
                )}
              </div>

              {/* Descripción adicional */}
              <div>
                <Controller
                  name="description_more_details"
                  control={control}
                  render={({ field: { onChange, value, name } }) => (
                    <TextArea
                      label="Describa más detalles (Opcional)"
                      name={name}
                      value={(value as string) || ""}
                      error={error(name)}
                      helperText={errorMessage(name)}
                      rows={3}
                      onChange={onChange}
                      placeholder="Describa más detalles sobre el servicio que necesita"
                    />
                  )}
                />
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-3">
              <Button block variant="primary" type="submit">
                <div className="flex gap-2 items-center justify-center">
                  Continuar
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
