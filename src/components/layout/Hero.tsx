import React from "react";
import Image from "next/image";
import { ArrowRightCircle, MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero mt-8">
      <div className="py-12 ">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br />
          with a <span className="text-primary"> Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-2xl">
          Pizza is the missing peice that makes every day complete, a simple yet
          delicous joy in life
        </p>
        <div className="flex gap-4 items-center ">
          <button className="bg-primary text-white justify-center uppercase px-4 py-4 rounded-full flex gap-1">
            <span>Order Now</span> <ArrowRightCircle className="w-6 h-6" />
          </button>
          <button className=" flex gap-2 py-4 text-gray-600 font-semibold items-center justify-center border-black border-2 rounded-full px-4">
            Learn More <ArrowRightCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/images/pizza.png"}
          layout={"fill"}
          objectFit="contain"
          alt={"Pizza"}
        />
      </div>
    </section>
  );
};

export default Hero;
