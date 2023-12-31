import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dd7wkze",
        "template_cuum4r8",
        form.current,
        "9C21XUC2pGU6GSsNB"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Thanks for contacting!");
            form.current.reset();
          } else {
            alert("Something went wrong!");
          }
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const contact_info = [
    {
      logo: "mail",
      text: "hello@karinasaini.me",
      link: "mailto:hello@karinasaini.me",
    },
    {
      logo: "location",
      text: "Virar, Mumbai",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8 ml-5 mr-5">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-yellow-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col flex-1 gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
            />

            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={10}
            ></textarea>

            <button type="submit" className="btn-primary hover:bg-yellow-600">
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <a
                href={contact.link}
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-yellow-500 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
