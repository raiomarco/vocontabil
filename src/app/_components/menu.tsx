"use client";
import React from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/editar">Alterar Usuario</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/seF">Em desenvolvimento</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link href="/">Sair</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
