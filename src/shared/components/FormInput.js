import { Field } from "react-final-form";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import useValidateForm from "../hooks/useValidationForm";
import styled from "@emotion/styled";

const FormInput = ({ name, fieldProps, fieldBasedProps, ...props }) => {
  const [hasError, errorText] = useValidateForm(name);

  return (
    <Field name={name} {...fieldProps}>
      {({ input }) => (
        <StyledInput
          fullWidth
          error={hasError}
          helperText={errorText}
          {...(fieldBasedProps ? fieldBasedProps(input) : {})}
          {...input}
          {...props}
        />
      )}
    </Field>
  );
};

const StyledInput = styled(TextField)`
  border-radius: 40px;

  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

FormInput.propTypes = {
  name: PropTypes.string,
  fieldBasedProps: PropTypes.func,
  fieldProps: PropTypes.object,
};

export default FormInput;
