import { FC } from "react";
interface ProgressiveImageProps {
  className?: string;
  placeholderImg?: any;
  src: any;
  alt: string;
}

const ProgressiveImage: FC<ProgressiveImageProps> = (props) => {
  const { placeholderImg, src, alt, className } = props;

  return <img src={src} className={className} alt={alt} />;
};

export default ProgressiveImage;
