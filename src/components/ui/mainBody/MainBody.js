import React from "react";
import { Content } from "./Content";
import { SideBar } from "../sidebar/SideBar";

export const MainBody = () => {
  return (
    <>
      <div id="mainBody" className="row ">
        <div id="side-bar-container" className="col-2 px-0">
          <SideBar/>
        </div>

        <div className="col bg-light p-4 ">
          <Content />
        </div>
      </div>
    </>
  );
};
