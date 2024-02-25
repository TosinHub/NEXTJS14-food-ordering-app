"use client";
import { Session } from "inspector";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creatingUser, setCreatingUser] = useState<boolean>(false);
  const [userCreated, setUserCreated] = useState<boolean>(false);

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     setCreatingUser(true)
    const data = await axios.post("/api/register", { email, password });
         setCreatingUser(false);
         setUserCreated(true)
  };

  return (
    <section className="text-center">
      <h1 className=" text-primary text-4xl">Register</h1>
        { userCreated && (
           <div className="my-4 text-center ">
              User created,<br /> You can login <Link className="font-semibold underline"  href={'/login'}>HERE &raquo;</Link>
      </div>
        )

        }
     
      <form action="" className="block max-w-xl mx-auto" onSubmit={formSubmit}>
        <input
          disabled={creatingUser}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={creatingUser}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>

        <div className="my-4 text-center text-gray-500 text-2xl">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          {" "}
          <Image
            src={"/images/google.png"}
            alt={"login"}
            width={32}
            height={32}
          />{" "}
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default Register;
