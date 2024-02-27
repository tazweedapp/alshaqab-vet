import { TextField as MuiTextField } from "@mui/material";
import {
  PRIMARY_COLOR,
  RED,
  SECONDARY,
  SECONDARY_COLOR,
  TEXT_COLOR,
  TEXT_DISABLED,
  TEXT_PRIMARY,
} from "@/shared/styles";
import { styled } from "@mui/material/styles";

const TextField = styled(MuiTextField)(({ theme }) => ({
  marginTop: "2px",

  ".MuiInputLabel-formControl": {
    ".hint-icon": {
      marginLeft: "4px",
    },
  },
  ".MuiInputLabel-outlined": {
    position: "relative",
    margin: 0,
    left: "-10px",
    top: "4px",
    color: TEXT_COLOR,

    "&.Mui-focused": {
      color: PRIMARY_COLOR,
    },
    "&.Mui-error": {
      color: RED,
    },
  },

  "& label": {
    transformOrigin: "left",
    left: "unset",
    right: "unset",
    fontSize: "large",
    color: "#807D7B",
    fontWeight: 400,
    overflow: "unset",
  },

  "& .MuiOutlinedInput-root": {
    padding: "6px 0px 11px 14px",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: 4,
    border: `1px solid ${TEXT_DISABLED}`,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: PRIMARY_COLOR,
    },
  },
  "& .MuiOutlinedInput-root:hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: SECONDARY_COLOR,
    },
    "&.Mui-error": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: RED,
      },
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: PRIMARY_COLOR,
      borderWidth: "1px",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused.Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: RED,
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: 0,
    lineHeight: 1,
    "&.MuiInputBase-inputMultiline": {
      lineHeight: 1.5,
    },
  },
  fieldset: {
    legend: {
      display: "none",
    },
  },
  "& .Mui-disabled": {
    color: TEXT_DISABLED,
    "-webkit-text-fill-color": "inherit",
    "&.MuiInputLabel-outlined": {
      color: TEXT_PRIMARY,
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: SECONDARY,
      backgroundColor: "rgba(1, 1, 1, 2%)",
    },
    ".MuiOutlinedInput-root": {
      color: TEXT_DISABLED,
    },
  },
  ".MuiFormLabel-asterisk": {
    color: RED,
    marginLeft: "3px",
  },
  ".MuiFormHelperText-root": {
    marginLeft: "5px",
  },

  ".MuiInputAdornment-root": {
    marginLeft: 0,
    marginRight: "8px",
  },
}));

export default TextField;
