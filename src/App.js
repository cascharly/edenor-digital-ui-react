import React from "react";
import { TopBar } from "./components/ui/topBar/TopBar";
import { MainBody } from "./components/ui/mainBody/MainBody";
import { FooterBar } from "./components/ui/footerBar/FooterBar";

export const App = () => {
  return (
    <div className="container-fluid">
      <TopBar />
      <MainBody/>
      <FooterBar />
    </div>
  );
};
