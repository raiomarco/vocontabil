"use client";
import React from "react";
import Menu from "./menu";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <nav className="h-14 bg-[#2e026d]">
        <div className="mx-auto flex h-full items-center justify-between px-3">
          <div className="text-2xl font-bold text-white">Vó crediario</div>
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
