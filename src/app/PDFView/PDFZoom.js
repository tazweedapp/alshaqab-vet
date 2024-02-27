import { useMemo } from "react";
import PropTypes from "prop-types";
import { IconButton, Stack, Tooltip, Typography, alpha } from "@mui/material";
import { IconZoomIn, IconZoomOut } from "@tabler/icons-react";
import { PRIMARY_COLOR, WHITE } from "@/shared/styles";

const PDFZoom = ({ scale, setScale, ...props }) => {
  const zoomPercentage = useMemo(() => (scale * 100).toFixed(), [scale]);

  const handleZoomIn = () => {
    if (scale >= 2) return;
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    if (scale <= 0.3) return;
    setScale(scale - 0.1);
  };

  const buttonStyles = {
    width: 30,
    height: 30,
    padding: 0,
    minHeight: 30,
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 4,
        py: 0.3,
        px: 1,
      }}
      {...props}
    >
      <Tooltip title="Zoom Out">
        <IconButton sx={buttonStyles} onClick={handleZoomOut}>
          <IconZoomOut size={20} color={WHITE} />
        </IconButton>
      </Tooltip>
      <Typography variant="body1" fontWeight={600} mx={1}>
        {zoomPercentage}%
      </Typography>
      <Tooltip title="Zoom In">
        <IconButton sx={buttonStyles} onClick={handleZoomIn}>
          <IconZoomIn size={20} color={WHITE} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
PDFZoom.propTypes = {
  scale: PropTypes.number,
  setScale: PropTypes.func,
};

export default PDFZoom;
