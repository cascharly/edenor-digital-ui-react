import React from "react";
import { MisCuentas } from "./MisCuentas";
import { Notificaciones } from "./Notificaciones";
import { NuevoMedidor } from "./NuevoMedidor";
import { ServicioTecnico } from "./ServicioTecnico";
import { Tramites } from "./Tramites";

export const UserOptions = () => {
  return (
    <>
      <div id="options" className="py-3 px-3  ">
        <MisCuentas />
        <Tramites />
        <ServicioTecnico />
        <NuevoMedidor />
        <Notificaciones />
      </div>
    </>
  );
};
