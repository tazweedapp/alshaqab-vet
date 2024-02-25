"use client";

import { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { muiBreakpoints } from "./muiBreakpoints";
import { muiComponents } from "./muiComponents";
import { muiPalette } from "./muiPalette";
import { muiShadows } from "./muiShadows";
import { muiTypography } from "./muiTypography";
import "react-toastify/dist/ReactToastify.css";

const MUIThemeProvider = ({ mode, direction, children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        direction,
        palette: muiPalette(mode),
        components: muiComponents,
        typography: muiTypography,
        breakpoints: muiBreakpoints,
      }),
    [direction, mode]
  );

  theme.shadows = muiShadows(theme.shadows);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <ToastContainer theme="colored" position="top-right" />
    </ThemeProvider>
  );
};

MUIThemeProvider.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node,
  direction: PropTypes.string,
};

export default MUIThemeProvider;
