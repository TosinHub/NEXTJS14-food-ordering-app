"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const session = useSession()

  const status = session.status

  console.log(session)
  return (
    <div>
      <header className="flex items-center justify-between ">
        <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
          <Link href="/" className="text-primary font-semibold text-2xl">
            ST PIZZA
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4  text-gray-500 font-semibold">
          {status == "authenticated" ? (
            <button
              onClick={()=> signOut()}
              className="bg-primary text-white px-4 py-2 rounded-full"
            >
              Logout
            </button>
          ): (
            <> <Link
            href={"/login"}
            className="border-black border-2 rounded-full px-4 py-2"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="bg-primary text-white px-4 py-2 rounded-full"
          >
            Register
          </Link>
            </>
          )}
         
        </nav>
      </header>
    </div>
  );
};

export default Header;
