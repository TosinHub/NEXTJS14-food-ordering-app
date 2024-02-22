import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <header className="flex items-center justify-between ">
        <Link href="" className="text-primary font-semibold text-2xl">
          ST PIZZA
        </Link>
        <nav className="flex gap-8 text-gray-500 font-semibold items-center ">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link href={""} className="bg-primary text-white px-4 py-2 rounded-full">Login</Link>
        </nav>
      </header>
    </div>
  );
};

export default Home;
