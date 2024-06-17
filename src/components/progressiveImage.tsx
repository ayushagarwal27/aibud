import { useState, useEffect, FC } from "react";
import Image from "next/image";
interface ProgressiveImageProps {
  className?: string;
  placeholderImg: any;
  src: string;
  alt: string;
}

const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { placeholderImg, src, alt, className } = props;

  return (
    <img
      src={src}
      // loader={placeholderImg}
      className={className}
      alt={alt}
      // fill={false}
    />
  );
};

export default ProgressiveImage;
