import React from "react";
import aboutImg from "../assets/images/avif.png";

const About = () => {
  const info = [{ text: "Completed Projects", count: "20" }];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8 ">
        <h3 className="text-4xl font-semibold">
          About <span className="text-yellow-500">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg ">Introduce Myself</p>
        <div className="flex lg:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl">
          <div className="p-2">
            <div className="text-gray-300 my-3 m-20">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                👩‍💻 20-year-old BCom student with 2 years of learning and 6
                months of hands-on experience in frontend development. I love
                coding and want to make the web a better place through Frontend
                Development.
              </p>
              <div className="flex mt-10 items-center gap-7 ml-24">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-yellow-500">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                href="assets/images/Karina_Saini_Resume.pdf"
                download="Karina_Saini_Resume.pdf"
              >
                <button
                  className="btn-primary 
                "
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative w-full max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-yellow-400 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
