import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { GRAY_BORDER, WHITE } from "@/shared/styles";

const PDFLoader = ({ content, text, width, height }) => {
  const router = useRouter();
  const toastId = useRef(null);

  useEffect(() => {
    if (text === "Failed to load PDF") {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Failed to load PDF, Please check your sin number"
        );
        router.push("/");
      }
    }
  }, [text, router]);

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
