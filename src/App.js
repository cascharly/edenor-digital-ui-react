import React from "react";
import { TopBar } from "./components/TopBar";
import { MainBody } from "./components/MainBody";
import { FooterBar } from "./components/FooterBar";

export const App = () => {
  return (
    <div className="container-fluid">
      <TopBar />
      <MainBody />
      <FooterBar />
    </div>
  );
};
