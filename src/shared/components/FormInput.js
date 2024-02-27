import React from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

import Input from "./Input/Input";
import useValidateForm from "../hooks/useValidationForm";
import styled from "@emotion/styled";

// Dependencies : react-final-form
const FormInput = ({ name, fieldProps, fieldBasedProps, ...props }) => {
  const [hasError, errorText] = useValidateForm(name);

  return (
    <Field name={name} {...fieldProps}>
      {({ input }) => (
        <StyledInput
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

const StyledInput = styled(Input)`
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &.MuiFormControl-root {
    margin-bottom: 1rem;
  }
  input,
  textarea {
    font-size: 0.9rem;
  }
`;

FormInput.propTypes = {
  name: PropTypes.string,
  fieldBasedProps: PropTypes.func,
  fieldProps: PropTypes.object,
};

export default FormInput;
