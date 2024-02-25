import { merge } from "lodash";

import { muiButton } from "./muiButton";
import { muiForm } from "./muiForm";
import { muiTooltip } from "./muiTooltip";

export const muiComponents = {
  ...merge(muiButton, muiForm, muiTooltip),

  MuiFab: {
    size: "small",
  },
  MuiList: {
    dense: true,
  },
  MuiMenuItem: {
    dense: true,
  },
  MuiTable: {
    size: "small",
  },
};
