import React from "react";
import logo from "../../public/images/icon.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed z-[100] top-0 left-0 w-screen flex flex-row items-center px-6 py-5 justify-between">
      <div className="flex flex-row items-center gap-2">
        <Image src={logo} alt="TaskLabs" className="h-8 w-8" />
        <span className="font-semibold text-xl">Getting Started</span>
      </div>

      <div className="text-[#56033F] text-sm">
        ❛We automated legs, then arms, then fingers, and now brains❜ - Benedict
        Evans
      </div>

      <Link
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfxC0ggD4kmanvOyZiYbC1GkZfYbgcbPne-kiY71WSDM3zFbw/viewform?ref=taskassist.ghost.io"
      >
        <button className="text-sm font-semibold bg-slate-100 rounded-lg py-2 px-5 text-zinc-600">
          Report a Bug 🐞
        </button>
      </Link>
    </div>
  );
}

export default Header;
