import { Session } from "inspector";
import React from "react";
import Image from 'next/image';

const Register = () => {
  return (
    <section className="text-center">
      <h1 className=" text-primary text-4xl">Register</h1>
      <form action="" className="block max-w-xl mx-auto">
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
        <button type="submit">Register</button>

        <div className="my-4 text-center text-gray-500 text-2xl">
          {" "}
          or login with provider
        </div>
        <button> <Image src={""} alt={""}/> Login with Google</button>
      </form>
    </section>
  );
};

export default Register;
