import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import { GRAY_BORDER, WHITE } from "@/shared/styles";

const PDFLoader = ({ content, text, width, height }) => {
  return (
    <Stack
      width={width}
      height={height}
      bgcolor={WHITE}
      border={`1px solid ${GRAY_BORDER}`}
      justifyContent="center"
      alignItems="center"
    >
      {content}
      <Typography variant="body2" mt={1} textAlign="center">
        {text}
      </Typography>
    </Stack>
  );
};

PDFLoader.propTypes = {
  content: PropTypes.node,
  text: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
};

export default PDFLoader;
