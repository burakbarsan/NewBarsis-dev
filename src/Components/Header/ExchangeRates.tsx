import React from "react";

const ExchangeRates = ({}: any) => {
  return (
    <React.Fragment>
      <div className="exchange-rates-div">
        <button
          type="button"
          className="custom-toggle btn header-button-address"
        >
          Address Bank
        </button>
        <button type="button" className="custom-toggle btn header-button">
          <span>22/01/2024</span>
          <i className="ri-calendar-line header-price-icon"></i>
        </button>
        <button type="button" className="custom-toggle btn header-button ">
          <span>EUR S:</span>
          <span> </span>
          <span className="neutral-400">31.9153</span>
        </button>
        <button type="button" className="custom-toggle btn header-button ">
          <span>EUR A:</span>
          <span> </span>
          <span className="neutral-400">31.9153</span>
        </button>
        <button type="button" className="custom-toggle btn header-button ">
          <span>USD S:</span>
          <span> </span>
          <span className="neutral-400">31.9153</span>
        </button>

        <button type="button" className="custom-toggle btn header-button ">
          <span>USD A:</span>
          <span> </span>
          <span className="neutral-400">31.9153</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExchangeRates;
