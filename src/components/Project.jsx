import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap-icons/font/bootstrap-icons.css";

import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "HooBank",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://hoobank-87500.web.app/",
    },
    {
      img: project2,
      name: "gpt3",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://gpt3-9cac2.web.app/",
    },
    {
      img: project3,
      name: "Netflix",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://netflix-clone-65a66.firebaseapp.com/",
    },
    {
      img: project4,
      name: " Gericht Restaurants",
      github_link:
        "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
      live_link: "https://gerich-restaurant-394308.web.app/",
    },
    {
      img: project5,
      name: "Dashboard",
      github_link: "https://github.com/Sridhar-C-25",
      live_link: "https://dashboard-17cf6.web.app/",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-violet-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full lg:items-center p-2">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-violet-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-violet-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
