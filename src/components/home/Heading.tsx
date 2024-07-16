"use client";
import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Heading = () => {
  const headingRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(headingRef.current, { y: 100, opacity: 0, duration: 1 }); // <-- automatically reverted
    },
    { dependencies: [] }
  );
  return (
    <h2 ref={headingRef} className="text-2xl text-fuchsia-800 lg:text-4xl">
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
