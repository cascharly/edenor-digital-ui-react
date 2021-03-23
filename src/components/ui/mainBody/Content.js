import React from "react";
import { BtnAsociarCuenta } from "./BtnAsociarCuenta";
import { BtnVerLista } from "./BtnVerLista";

export const Content = () => {
  return (
    <>
      <div className="row ">
        <div className="col">
          <h3 className="">Mis cuentas</h3>
        </div>
        <div className="col text-right">
          <BtnVerLista />
          <BtnAsociarCuenta />
        </div>
      </div>
      <hr />
      {/* -------------------------------------------- */}
      <div className="row">
        <div className="col border border-success">Detalles</div>
      </div>
    </>
  );
};
