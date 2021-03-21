import React from "react";
import { Content } from "./Content";
import { SideBar } from "./SideBar";

export const MainBody = () => {
  return (
    <>
      <div id="mainBody" className="row ">
        <div className="col-2 px-0">
          <SideBar />
        </div>

        <div className="col bg-light ">
          <Content />
        </div>
      </div>
    </>
  );
};
