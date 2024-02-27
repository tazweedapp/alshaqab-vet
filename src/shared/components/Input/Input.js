import React from "react";
import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import FormHint from "./FormHint";
import TextField from "./Textfield";

const Input = ({ label, hint, formControlProps, ...props }) => {
  return (
    <FormControl fullWidth variant="standard" {...formControlProps}>
      <TextField
        label={
          hint ? (
            <>
              {label}
              <FormHint hint={hint} />
            </>
          ) : (
            label
          )
        }
        InputLabelProps={{ shrink: true }}
        autoComplete="off"
        {...props}
      />
    </FormControl>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  formControlProps: PropTypes.object,
};

export default Input;
