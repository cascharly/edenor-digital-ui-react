import React from "react";
import { FaceBook } from "./FaceBook";
import { Twitter } from "./Twitter";
import { Youtube } from "./Youtube";

export const Social = () => {
  return (
    <>
      <span>Seguinos en </span>
      <FaceBook />
      <Twitter />
      <Youtube />
    </>
  );
};
