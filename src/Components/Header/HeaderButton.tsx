import React from "react";

const HeaderButton = ({ buttonText, icon, color, onClick }: any) => {
  const buttonColor = {
    color: color,
  };

  return (
    <React.Fragment>
      <button
        onClick={onClick}
        type="button"
        style={buttonColor}
        className="custom-toggle btn header-button"
      >
        <span  className="icon-on">
          {icon} {buttonText}
        </span>
      </button>
    </React.Fragment>
  );
};

export default HeaderButton;
