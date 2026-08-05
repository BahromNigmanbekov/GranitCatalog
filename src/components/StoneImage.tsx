import { useState } from "react";
import { IMG_DIMS, DEFAULT_DIMS } from "../data/imageDims";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export function StoneImage({ src, alt, className }: Props) {
  const [failed, setFailed] = useState(false);
  const [w, h] = IMG_DIMS[src] ?? DEFAULT_DIMS;

  if (failed) {
    return <div className={className} aria-label={alt} role="img" />;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
