import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  const d = direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7";
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const touchX = useRef<number | null>(null);
  const current = images[index];
  const { lang } = useLang();
  const strings = UI[lang];

  const go = (next: number) => {
    onIndexChange((next + images.length) % images.length);
  };

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) go(index - 1);
      if (e.key === "ArrowRight" && images.length > 1) go(index + 1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label={strings.lightboxClose} onClick={onClose}>
        <CloseIcon />
      </button>

      <div
        className="lightbox-stage"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40 && images.length > 1) go(index + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <img key={current.src} className="lightbox-img" src={current.src} alt={current.alt} />
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-prev"
            aria-label={strings.lightboxPrev}
            onClick={(e) => {
              e.stopPropagation();
              go(index - 1);
            }}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-next"
            aria-label={strings.lightboxNext}
            onClick={(e) => {
              e.stopPropagation();
              go(index + 1);
            }}
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}

      {current.caption && <p className="lightbox-caption">{current.caption}</p>}

      {images.length > 1 && (
        <div className="lightbox-dots" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={strings.lightboxImageLabel(i + 1)}
              aria-current={i === index}
              className={i === index ? "dot dot-active" : "dot"}
              onClick={() => onIndexChange(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
