import { useState, useEffect, FC } from "react";
interface ProgressiveImageProps {
  height?: number;
  width?: number;
  className?: string;
  placeholderImg: any;
  src: string;
  alt: string;
}

const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { height, width, placeholderImg, src, alt, className } = props;
  const [imgSrc, setSrc] = useState(placeholderImg || src);
  const customClass =
    placeholderImg && imgSrc === placeholderImg ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setSrc(src);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      className={customClass + " " + className}
      height={height}
      width={width}
      alt={alt}
    />
  );
};

export default ProgressiveImage;
