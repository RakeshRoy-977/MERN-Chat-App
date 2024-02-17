import React from "react";
import SearchBox from "./Sidebar/SearchBox";
import Conversations from "./Sidebar/Conversations";
import LogoutBtn from "./Sidebar/LogoutBtn";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchBox />
      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
