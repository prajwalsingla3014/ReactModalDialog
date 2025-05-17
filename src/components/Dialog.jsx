import React, { useEffect } from "react";

const Dialog = ({ children, onClose }) => {
  function handleClose() {
    onClose();
  }

  function handleKeyUp(event) {
    if (event.key === "Escape") {
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  });

  return (
    <div className="dialog">
      <div
        className="dialog-backdrop"
        onClick={handleClose}
      ></div>
      <div className="dialog-content">
        {!!onClose && (
          <button
            className="dialog-close"
            onClick={handleClose}
          >
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Dialog;
