"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductHuntLabel = () => {
  const labelRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(labelRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.6,
        delay: 0.8,
        ease: "bounce",
      }); // <-- automatically reverted
    },
    { dependencies: [] }
  );

  return (
    <div
      className={"w-fit mx-auto mb-3 mt-12  md:mt-2 md:mb-10"}
      ref={labelRef}
    >
      <a
        href="https://www.producthunt.com/posts/aibud?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-aibud"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=465863&theme=light"
          alt="AiBud - AiBud&#0032;&#0045;&#0032;Where&#0032;Entertainment&#0032;Meets&#0032;Fashion&#0033; | Product Hunt"
          className={"w-[150px] h-[50px]  md:w-[250px] md:h-[54px]"}
        />
      </a>
    </div>
  );
};

export default ProductHuntLabel;
