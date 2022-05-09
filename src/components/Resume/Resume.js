import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume">
      <h1>
        Page {pageNumber} of {numPages}
      </h1>
      <Document file="CV.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Resume;
