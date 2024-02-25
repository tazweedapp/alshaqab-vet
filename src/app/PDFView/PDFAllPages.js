"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

import { pdfConfiguration } from "./PDFView.helper";
import styled from "@emotion/styled";

const PDF_DIMENSIONS = {
  width: "603px",
  height: "774px",
};

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFAllPages = ({ scale = 1, file }) => {
  const [numPages, setNumPages] = useState();
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Wrapper direction="row" justifyContent="center">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        {...pdfConfiguration(PDF_DIMENSIONS.width, PDF_DIMENSIONS.height)}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            className="novalabs-pdf-page"
            pageNumber={index + 1}
            scale={scale}
          />
        ))}
      </Document>

      <div className="watermark" />
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  .novalabs-pdf-document {
    max-width: 100%;
    overflow: auto;
  }
  .novalabs-pdf-page {
    min-height: 38rem;
    margin: 1rem;
  }
  @media print {
    .watermark {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 200%;
      height: 200%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8rem;
      background-color: white;
      color: rgba(0, 0, 0, 0.1);
      z-index: 9999;
    }
  }
`;

PDFAllPages.propTypes = {
  file: PropTypes.any,
  scale: PropTypes.number,
};
export default PDFAllPages;
