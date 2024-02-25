import pdfLoadingJson from "@/assets/lotties/pdf-loading.json";
import Lottie from "lottie-react";
import PDFLoader from "./PDFLoader";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import styled from "@emotion/styled";

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

export const pdfConfiguration = (width, height, isSmall) => ({
  className: "novalabs-pdf-document",
  options: options,

  loading: (
    <PDFLoader
      width={width}
      height={height}
      content={
        <EmptyLottie $isSmall={isSmall} animationData={pdfLoadingJson} loop />
      }
      text="Loading PDF"
    />
  ),
  error: (
    <PDFLoader
      width={width}
      height={height}
      content={
        <EmptyLottie $isSmall={isSmall} animationData={pdfLoadingJson} loop />
      }
      text="Failed to load PDF"
    />
  ),
  noData: (
    <PDFLoader
      width={width}
      height={height}
      content={
        <EmptyLottie $isSmall={isSmall} animationData={pdfLoadingJson} loop />
      }
      text="No PDF file specified"
    />
  ),
});

const EmptyLottie = styled(Lottie)`
  width: ${(props) => (props.$isSmall ? "30px" : "8rem")};
  max-width: 100%;
`;
