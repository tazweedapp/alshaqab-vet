import {
  GRAY_BORDER,
  GREEN,
  PRIMARY_COLOR,
  RED,
  TEXT_PRIMARY,
} from "@/shared/styles";

const LIGHT_THEME = () => ({
  secondary: {
    main: GRAY_BORDER,
    contrastText: TEXT_PRIMARY,
    light: "#f2f4f5",
    dark: "#dbe1e4",
  },
  background: {
    paper: "#FFFFFF",
  },
  text: {
    primary: TEXT_PRIMARY,
    secondary: "#9F9A9A",
    disabled: "#E0DFDF",
    hint: "#E8ECEE",
  },
  divider: "#E8ECEE",
  neutral: {
    main: TEXT_PRIMARY,
    contrastText: "#fff",
  },
});

const DARK_THEME = {
  secondary: {
    main: "#ecded7",
  },
  neutral: {
    main: "#FFFFFF",
    contrastText: TEXT_PRIMARY,
  },
};

export const muiPalette = (mode = "light") => ({
  mode,
  primary: {
    main: PRIMARY_COLOR,
    dark: PRIMARY_COLOR,
    contrastText: "#FFFFFF",
  },
  error: {
    main: RED,
  },
  success: {
    main: GREEN,
  },
  ...(mode === "dark" ? DARK_THEME : LIGHT_THEME()),
});
