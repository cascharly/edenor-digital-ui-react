import React from "react";
import { BtnAsociarCuenta } from "./BtnAsociarCuenta";
import { BtnVerLista } from "./BtnVerLista";

export const Content = () => {
  return (
    <>
      <div className="row ml-2">
        <div className="col pl-0">
          <h3 className="">Mis cuentas</h3>
        </div>
        <div className="col text-right">
          <BtnVerLista />
          <BtnAsociarCuenta />
        </div>
      </div>
      <hr />
      {/* -------------------------------------------- */}
      <div id="account-wrapper" className="row ml-2">
        <div id="account-main" className="col-11 p-3 mt-2 mb-2 ">
          <div className="row">
            <div id="account-title" className="col-1 m-2 p-0 text-center">
              <span>Cuenta</span>
            </div>
            <div className="border border-black"></div>
            <div className="col">
              <div id="account-address" className="col">
                <span>PAVON 2676 , Beccar</span>
              </div>
              <div id="account-number" className="col">
                <span>N° 5012193477 - Titular SPAGNOLETTI CARLOS ARTURO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
