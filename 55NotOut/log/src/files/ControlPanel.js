import React from 'react';
import '../css_Files/controlPanel.css';

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber, setScale, scale } = props;

  const isFirstpage = pageNumber === 1;
  console.log(isFirstpage);
  const isLastPage = pageNumber === numPages;
  const firstPageClass = isFirstpage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  const fotofirstpage = () => {
    if (!isFirstpage) {
      setPageNumber(1);
    }
  };
  const gottopreviouspage = () => {
    if (!isFirstpage) {
      setPageNumber(pageNumber - 1);
    }
  };
  const gotonextpage = () => {
    if (!isLastPage) {
      setPageNumber(pageNumber + 1);
    }
  };
  const gotolastpage = () => {
    if (!isLastPage) {
      setPageNumber(numPages);
    }
  };

  const onPagechange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale <= 0.5;
  const isMaxZoom = scale >= 2.0;

  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';
  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';

  const zoomout = () => {
    if (!isMinZoom) {
      setScale(scale - 0.1);
    }
  };
  const zoomin = () => {
    if (!isMaxZoom) {
      setScale(scale + 0.1);
    }
  };

  const downloadtnClicked = () => {
    props.downloadclicked(true);
  };

  return (
    <div className='contole-panel m-5 p-3 d-flex align-items-baseline justify-content-between'>
      <div className='d-flex justify-content-between align-items-baseline '>
        <i
          className={`fas fa-fast-backward mx-3 ${firstPageClass}`}
          onClick={fotofirstpage}
        />
        <i
          className={`fas fa-backward mx-3 ${firstPageClass}`}
          onClick={gottopreviouspage}
        />
        <p>
          Page
          <input
            name='pageNumber'
            type='number'
            min={1}
            max={numPages || 1}
            className='p-o pl-1 mx-2'
            value={pageNumber}
            onChange={onPagechange}
          />
          {pageNumber} of {numPages}
        </p>
        <i
          className={`fas fa-fast-forward mx-3 ${lastPageClass}`}
          onClick={gotonextpage}
        />
        <i
          className={`fas fa-forward mx-3 ${lastPageClass}`}
          onClick={gotolastpage}
        />
      </div>
      <div className='d-flex justify-content-between align-items-baseline '>
        <i
          className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomout}
        />
        <span>{(scale * 100).toFixed()}%</span>
        <i
          className={`fas fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomin}
        />
        <i
          className='fas fa-download d-flex mx-3 backgroundhiver'
          onClick={downloadtnClicked}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
