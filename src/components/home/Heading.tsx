"use client";
import React from "react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Heading = () => {
  const headingRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(headingRef.current, {
        y: 10,
        duration: 0.5,
        autoAlpha: 0,
        ease: "power1",
      });
    },
    { dependencies: [] }
  );
  return (
    <h2
      ref={headingRef}
      className="text-2xl text-fuchsia-800 lg:text-4xl invisible"
    >
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
