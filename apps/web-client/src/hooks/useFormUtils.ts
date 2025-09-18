import { useEffect } from "react";
import { FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { get, isEmpty, isString } from "lodash";

interface Props<FormData extends ObjectType> {
  errors?: FieldErrors<FormData>;
  schema: yup.AnyObjectSchema;
}

type Tests = { name: string; params: Record<string, unknown> }[];

interface UseFormUtils<FormData extends ObjectType> {
  required: (name: string) => boolean;
  error: (name: string) => boolean;
  errorMessage: (name: string) => string | undefined;
  errorDetail: (name: string) => FieldErrors<FormData>[string];
}

export const useFormUtils = <FormData extends ObjectType>({
  errors,
  schema,
}: Props<FormData>): UseFormUtils<FormData> => {
  useEffect(() => {
    !isEmpty(errors) && scrollIntoError();
  }, [errors]);

  const scrollIntoError = () => {
    const formItemErrors = document.getElementsByClassName(
      "scroll-error-anchor",
    );

    formItemErrors.length &&
      formItemErrors[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  const errorDetail: UseFormUtils<FormData>["errorDetail"] = (name: string) =>
    errors && errors[name];

  const errorMessage: UseFormUtils<FormData>["errorMessage"] = (name) => {
    const message = errors && errors[name]?.message;

    return isString(message) ? message : undefined;
  };

  const error: UseFormUtils<FormData>["error"] = (name) =>
    !!(errors && errors[name]);

  const required: UseFormUtils<FormData>["required"] = (name) => {
    const describe = schema.describe();

    const describePath = [];

    name.split(".").forEach((fieldName) => {
      describePath.push("fields");
      describePath.push(fieldName);
    });

    describePath.push("tests");

    const tests: Tests = get(describe, describePath, []);

    return tests.some((test) => test.name === "required");
  };

  return { required, error, errorMessage, errorDetail };
};
