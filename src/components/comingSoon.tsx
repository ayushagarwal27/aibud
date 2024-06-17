import React from "react";
// import Image from "next/image";
// import movieIMage from "../assets/images/video-editing.png";

const ComingSoon = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900">
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <nav className="md:flex md:items-center md:justify-between"></nav>

        <section className="flex items-center flex-1 relative">
          <div className="flex flex-col w-full">
            <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
              <span className="text-transparent bg-gradient-to-br bg-clip-text  from-teal-200 via-indigo-300 to-sky-500">
                Coming{" "}
              </span>
              <span className="text-transparent bg-gradient-to-tr bg-clip-text  from-sky-300 via-pink-300 to-red-500">
                Soon
              </span>
            </h1>
            {/*<div*/}
            {/*  className={*/}
            {/*    "w-[200px] h-[200px] absolute rotate-45 right-[5%] top-[30%]"*/}
            {/*  }*/}
            {/*>*/}
            {/*  <Image*/}
            {/*    src={movieIMage}*/}
            {/*    alt={"movie logo"}*/}
            {/*    className={"w-full h-full"}*/}
            {/*  />*/}
            {/*</div>*/}
            <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-white md:text-xl">
              Your AI buddy for your entertainment and design needs
            </p>
            {/*<div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">*/}
            {/*  <input*/}
            {/*    className="px-6 py-3  border rounded-md bg-gray-900 text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"*/}
            {/*    id="email"*/}
            {/*    placeholder="Email Address"*/}
            {/*    type="text"*/}
            {/*  />*/}
            {/*  <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">*/}
            {/*    Notify Me*/}
            {/*  </button>*/}
            {/*</div>*/}
            {/*<p className="mt-8 text-center  text-white text-md md:text-xl">*/}
            {/*  Notify me when App is launched :)*/}
            {/*</p>*/}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ComingSoon;
