import { useRef, useState } from "react";
import { StoneImage } from "./StoneImage";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

interface Props {
  images: string[];
  alt: string;
}

export function Gallery({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const { lang } = useLang();
  const strings = UI[lang];

  const go = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  return (
    <div
      className="gallery"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="gallery-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="gallery-slide" key={src + i}>
            <StoneImage src={src} alt={alt} className="gallery-img" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="gallery-nav prev" aria-label={strings.lightboxPrev} onClick={() => go(index - 1)} />
          <button className="gallery-nav next" aria-label={strings.lightboxNext} onClick={() => go(index + 1)} />
          <div className="gallery-dots">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={strings.lightboxImageLabel(i + 1)}
                aria-current={i === index}
                className={i === index ? "dot dot-active" : "dot"}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
