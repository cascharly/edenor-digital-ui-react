import React from "react";

export const Content = () => {
  return (
    <>
      <div className="row ">
        <div className="col">
          <h3 className="">Mis cuentas</h3>
        </div>
        <div className="col text-right">
          <button id="btn-cuentas" className="mr-3 px-3">
            <span className="">
              <svg viewBox="0 0 24 24" fill="#4d97fa" className="align-bottom">
                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
              VER LISTA
            </span>
          </button>
          <button id="btn-cuentas" className="px-3">
            <span>
              <svg viewBox="0 0 24 24" fill="#4d97fa" className="align-bottom">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
              ASOCIAR CUENTA
            </span>
          </button>
        </div>
      </div>
      <hr />
      {/* ///////////////////////////////////////////////////////////////////// */}
      <div className="row">
        <div className="col border border-success">Detalles</div>
      </div>
    </>
  );
};
