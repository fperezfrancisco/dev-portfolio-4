import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full max-w-[1000px] mx-auto py-24" id="contact">
      <div className="w-full flex flex-col items-center text-center tracking-tight">
        <h2 className="text-4xl md:text-5xl font-bold my-4">
          Let's Get in Touch!
        </h2>
        <p className="text-center max-w-[450px] mt-4">
          If you’re interested in collaborating or hiring me for your project,
          send me a message so we can connect. I am currently open for new
          opportunities!
        </p>
        <button className="mt-8 w-full max-w-[350px] h-14 rounded-lg bg-[#121212] text-white">
          Send a Message
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
