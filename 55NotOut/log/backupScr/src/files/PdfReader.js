import React, { useState } from 'react';
import Loader from './Loader';
import { Document, Page } from 'react-pdf';
import resume from '../resumeUpload/toc.pdf';
import '../css_Files/pdfreader.css';
import ControlPanel from './ControlPanel';
import SeeAllHeader from './SeeAllHeader';
import HomeResponsiveHeader from './HomeResponsiveHeader';
import Footer from './Footer';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfReader = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1.0);
  const filename = props.location.state.filename;
  console.log(filename);
  // const requiredFileName = require(`../resumeUpload/${filename}`);
  let requiredFileName = {};
  if (filename !== null && filename !== 'nothing') {
    requiredFileName = require(`../resumeUpload/${filename}`);
  }
  console.log(requiredFileName);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);

    // (requiredFileName.default, filename)
  }

  const downloadclicked = (value) => {
    console.log(value);

    function download_file(fileURL, fileName) {
      if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
        save.download = fileName || filename;
        if (
          navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
          navigator.userAgent.search('Chrome') < 0
        ) {
          document.location = save.href;
        } else {
          var evt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false,
          });
          save.dispatchEvent(evt);
          (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
      } else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL);
        _window.close();
      }
    }

    download_file(requiredFileName.default, filename);
  };

  return (
    <div>
      <HomeResponsiveHeader />
      <SeeAllHeader></SeeAllHeader>
      <Loader isLoading={isLoading} />
      <section
        id='pdf-section'
        className='d-flex flex-column align-items-center'
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          downloadclicked={downloadclicked}
        />
        <Document
          file={requiredFileName.default}
          onLoadSuccess={onDocumentLoadSuccess}
          // onLoadSuccess={download_file(requiredFileName.default, filename)}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
      <Footer />
    </div>
  );
};

export default PdfReader;
