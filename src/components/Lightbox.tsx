import { useEffect, useRef } from "react";

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

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const touchX = useRef<number | null>(null);
  const current = images[index];

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
      <button type="button" className="lightbox-close" aria-label="Yopish" onClick={onClose}>
        ×
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
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-prev"
            aria-label="Oldingi rasm"
            onClick={(e) => {
              e.stopPropagation();
              go(index - 1);
            }}
          >
            ‹
          </button>
        )}

        <img
          key={current.src}
          className="lightbox-img"
          src={current.src}
          alt={current.alt}
        />

        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-next"
            aria-label="Keyingi rasm"
            onClick={(e) => {
              e.stopPropagation();
              go(index + 1);
            }}
          >
            ›
          </button>
        )}
      </div>

      {current.caption && <p className="lightbox-caption">{current.caption}</p>}

      {images.length > 1 && (
        <div className="lightbox-dots" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Rasm ${i + 1}`}
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
