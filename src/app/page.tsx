import Link from "next/link";
import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from '../components/layout/SectionHeader';

const Home = () => {
  return (
    <div>
  
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader subHeader="Our Story" mainHeader="About Us" />
        <div className="flex flex-col gap-6 max-w-3xl mx-auto mt-4 text-gray-500 text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quod quidem velit? Tempore maiores perspiciatis temporibus quod
            obcaecati ipsa voluptates dolor omnis minima fugit id, eaque enim
            corrupti quibusdam eveniet.
          </p>
          <p>
            Commodiquod quidem velit? Tempore maiores perspiciatis temporibus
            quod obcaecati ipsa voluptates dolor omnis minima fugit id, eaque
            enim corrupti quibusdam eveniet.
          </p>
          <p>
            Tempore maiores perspiciatis temporibus quod obcaecati ipsa
            voluptates dolor omnis minima fugit id, eaque enim corrupti
            quibusdam eveniet.
          </p>
        </div>
      </section>
      <section>
        <SectionHeader subHeader="Don't Hesitate" mainHeader="Contact Us" />
      <div className="mt-8 text-center">
          <a className="text-4xl text-gray-500 underline" href="tel: +24 5627 7544 234">
          +24 5627 7544 234
        </a>
      </div>
      
      </section>
    
    </div>
  );
};

export default Home;
