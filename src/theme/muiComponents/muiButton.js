const focusStyle = {
  boxShadow:
    "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
};

export const muiButton = {
  MuiButton: {
    size: "small",
    styleOverrides: {
      root: {
        textTransform: "unset",
        boxShadow: "none",
        "&:hover": {
          "&.MuiButton-outlined": {
            backgroundColor: "rgba(24,24,24,0.04)",
          },
          "&.MuiButton-contained": {
            boxShadow: "none",
            opacity: 0.9,
          },
        },
        "&.Mui-focusVisible": focusStyle,
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: "unset",
        "&.MuiButton-outlinedSecondary": {
          borderColor: "#E8ECEE",
          color: "#181818",
        },
        "&.Mui-focusVisible": focusStyle,
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiIconButton: {
    size: "small",
    styleOverrides: {
      root: {
        "&.Mui-focusVisible": focusStyle,
      },
    },
  },
  MuiButtonGroup: {
    size: "small",
  },
};
