import React from "react";
import person from "../assets/images/person.png";

const Hero = () => {
  const social_media = ["logo-instagram", "logo-facebook", "logo-twitter"];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-4 flex items-center justify-center h-full">
        <img
          src={person}
          alt=""
          className="object-cover h-full rounded-full w-60 mt-20 md:ml-60 "
        />
      </div>

      <div className="flex-1 mt-20">
        <div className="md:text-left text-center md:ml-44 ml-20">
          <h1 className="md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="md:text-6xl text-5xl">
              Hey! 👋
              <br />
            </span>
            I'm
            <span className="text-violet-600 md:text-5xl "> K</span>
            arina
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-3 font-bold text-gray-400  ">
            Fullstack Developer 💻
          </h4>
          <button className="btn-primary mt-8 ml-[0px!important] hover:bg-violet-800">
            Hire Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-7 mr-8">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
