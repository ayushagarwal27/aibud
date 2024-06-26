import React from "react";

const Heading = () => {
  return (
    <h2 className="text-2xl text-fuchsia-800 lg:text-4xl">
      <span>Your Mood, Your Inspiration: </span>
      <span
        className={
          "text-transparent  bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text"
        }
      >
        Discover, Decide, Dress!
      </span>
    </h2>
  );
};

export default Heading;
