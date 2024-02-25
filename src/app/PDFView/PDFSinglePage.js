import { Document, Page } from "react-pdf";
import PropTypes from "prop-types";
import { pdfConfiguration } from "./PDFView.helper";

const PDFSinglePage = ({ pageNumber = 1, url, width, height }) => {
  return (
    <Document file={url} {...pdfConfiguration(width, height, true)}>
      <Page
        pageNumber={pageNumber || 1}
        width={width}
        height={height}
        className="novalabs-pdf-page"
      />
    </Document>
  );
};

PDFSinglePage.propTypes = {
  pageNumber: PropTypes.number,
  url: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
};

export default PDFSinglePage;
