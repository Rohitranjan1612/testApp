import * as React from "react";
import AllChats from "../pages/AllChats";
import { Routes, Route } from "react-router-dom";

export default function SideBar() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<AllChats />} />
      </Routes>
    </React.StrictMode>
  );
}
