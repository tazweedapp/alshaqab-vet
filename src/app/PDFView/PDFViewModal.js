"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import bg from "@/assets/svgs/background.svg";
import CloseNavySvg from "@/assets/svgs/close-filled-navy.svg";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconQrcode } from "@tabler/icons-react";
import { useQRCode } from "next-qrcode";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PDFAllPages from "./PDFAllPages";
import PDFZoom from "./PDFZoom";
import { WHITE } from "@/shared/styles";

const HeaderHeight = "4rem";

const PDFViewModal = ({ isOpen, file, title, handleClose }) => {
  const { SVG } = useQRCode();
  const pathname = usePathname();
  const formattedPathname = pathname.substring(1);

  const [qrDialogOpen, setQrDialogOpen] = useState(false); // State to track QR dialog open/close
  const [scale, setScale] = useState(1.0);

  const handleOpenQrDialog = () => {
    setQrDialogOpen(true);
  };

  const handleCloseQrDialog = () => {
    setQrDialogOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={isOpen}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
        onClose={handleClose}
      >
        <AppBar sx={{ height: HeaderHeight, bgcolor: "white" }}>
          <Toolbar>
            <Stack
              mt={[1, 0]}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="body1" color="primary" fontWeight={700}>
                {title || "View PDF"}
              </Typography>

              <PDFZoom scale={scale} setScale={setScale} />
              <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpenQrDialog}>
                  <IconQrcode size={30} />
                </IconButton>
                <Button onClick={handleClose}>
                  <Image src={CloseNavySvg} alt="close" width={30} />
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>

        <Stack
          mt={HeaderHeight}
          overflow="auto"
          alignItems="center"
          minHeight={`calc(100% - ${HeaderHeight})`}
          sx={{ backgroundImage: `url(${bg.src})` }}
        >
          <PDFAllPages file={file} scale={scale} />
        </Stack>
      </Dialog>

      <Dialog open={qrDialogOpen} onClose={handleCloseQrDialog}>
        <SVG
          text={`${process.env.NEXT_PUBLIC_BASEURL}${formattedPathname}`}
          options={{
            margin: 2,
            width: 200,
            color: {
              dark: "#000",
              light: "#fff",
            },
          }}
        />
      </Dialog>
    </>
  );
};
PDFViewModal.propTypes = {
  isOpen: PropTypes.bool,
  file: PropTypes.any,
  title: PropTypes.string,
  handleClose: PropTypes.func,
};

export default PDFViewModal;
