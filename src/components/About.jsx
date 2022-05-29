import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et rem
          nihil commodi nesciunt debitis, voluptas, reiciendis consequatur
          consequuntur odio numquam voluptatum assumenda! Incidunt, quae sit.
          Maxime corrupti quaerat assumenda ratione cupiditate tenetur quo quis
          sed minima molestiae, error neque inventore consectetur reprehenderit.
          Minus neque deleniti, aspernatur eius quasi cum ab nostrum ipsum? Hic
          molestiae doloremque beatae quos culpa ipsa?
        </p>
        <a
          href="mailto:me@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          me@gmail.com
        </a>
      </div>

      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPeVc6D0glliM6sXthRDMKwngCXrcmH4qOAhyeR0gw7WaEgYQkUC3osMaSxegUCnTE7M&usqp=CAU"
        }
        alt="Me"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
