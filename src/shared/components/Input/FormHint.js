import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";
import { SECONDARY } from "@/shared/styles";
import styled from "@emotion/styled";

const FormHint = ({ hint }) => {
  if (!hint) return null;
  return (
    <Tooltip title={hint} placement="top">
      <QuestionMark>
        <i className="hint-icon ri-question-line" />
      </QuestionMark>
    </Tooltip>
  );
};
const QuestionMark = styled.big`
  color: ${SECONDARY};
  position: absolute;
  margin-left: 9px;
`;
FormHint.propTypes = {
  hint: PropTypes.string,
};

export default FormHint;
