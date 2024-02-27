"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creatingUser, setCreatingUser] = useState<boolean>(false);

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatingUser(true);
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
    setCreatingUser(false);
  };
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>

      <form className="block max-w-xl mx-auto" onSubmit={formSubmit}>
        <input
          disabled={creatingUser}
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={creatingUser}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Login
        </button>

        <div className="my-4 text-center text-gray-500 text-2xl">
          or login with provider
        </div>
        <button type="button" className="flex gap-4 justify-center" onClick={()=> signIn('google', {callbackUrl: '/'})}>
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

export default page;
