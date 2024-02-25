import { useField } from "react-final-form";

// Dependencies : react-final-form
const useValidateForm = (field) => {
  const { meta } = useField(field, {
    subscription: {
      touched: true,
      error: true,
      submitError: true,
    },
  });

  const { error, submitError, touched } = meta;
  const hasError = touched && Boolean(error || submitError);
  const errorText = hasError ? error || submitError : "";

  return [hasError, errorText];
};

export default useValidateForm;
