import React from "react";
import Sidebar from "../Components/SIdebar";
import MessagesContaner from "../Components/Messages/MessagesContaner";

const Home = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Sidebar />
      <MessagesContaner />
    </div>
  );
};

export default Home;
