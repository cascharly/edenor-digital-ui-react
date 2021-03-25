import React from "react";
import { Content } from "./Content";
import { SideBar } from "../sidebar/SideBar";

export const MainBody = () => {
  return (
    <>
      <div id="mainBody" className="row">
        <div id="sideBarContainer" className="col-2 px-0 d-none d-lg-block">
          <SideBar />
        </div>

        <div id="mainContent" className="col bg-white p-4 ">
          <Content />
        </div>
      </div>
    </>
  );
};
