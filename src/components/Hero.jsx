import React from "react";
import person from "../assets/images/person.png";
import karinas from "../assets/images/karinas.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-4 flex items-center justify-center h-full">
        <img
          src={person}
          alt=""
          className="object-cover h-full rounded-full w-60 mt-20 md:ml-60"
        />
      </div>

      <div className="flex-1 mt-20">
        <div className="md:text-left text-center md:ml-44">
          <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="md:text-6xl text-5xl">
              Hey! 👋
              <br />
            </span>
            I'm
            <span className="text-yellow-500 md:text-5xl "> K</span>
            arina
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-3 font-bold text-gray-400  ">
            Fullstack Developer 💻
          </h4>
          <button className="btn-primary mt-8 ml-[0px!important] hover:bg-yellow-600">
            <p>
              <a href="mailto:hello@karinasaini.me">Hire Me</a>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
