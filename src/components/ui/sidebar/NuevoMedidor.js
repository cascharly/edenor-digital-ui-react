import React from "react";

export const NuevoMedidor = () => {
  return (
    <>
      <a href="/">
        <div id="option-wrapper" className="row px-1 py-2">
          <div id="icon-sidebar">
            <svg viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
              <path
                fill="none"
                d="M0 0h24v24H0z"
                style={{ fill: "none" }}
              ></path>
            </svg>
          </div>
          <div className="col">
            <h6 className="m-1">Nuevo Medidor</h6>
          </div>
        </div>
      </a>
    </>
  );
};
