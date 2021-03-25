import React from "react";
import { User } from "./User";
import { UserOptions } from "./UserOptions";

export const SideBar = () => {
  return (
    <div id="sideBar" className="">
      <User />
      <UserOptions />
    </div>
  );
};
