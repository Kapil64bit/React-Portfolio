import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black 
      text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col 
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Kapil and I am full stack developer, I have a strong
          foundation in both front-end and back-end web development
          technologies. I am able to use my skills and knowledge to build
          complete web applications, including expertise in languages such as
          HTML, CSS, JavaScript, and frameworks like React or Angular for the
          front-end, as well as back-end language like Java and technologies
          like databases and servers.
        </p>
        <br />
        <p className="text-xl">
          I am comfortable working on both the client-side and server-side of an
          application, and have the skills and experience to bring an idea from
          conception to deployment. Being a full stack developer is a
          challenging and rewarding role that requires a wide range of technical
          skills and the ability to adapt and learn new technologies quickly.
        </p>
      </div>
    </div>
  );
};

export default About;
