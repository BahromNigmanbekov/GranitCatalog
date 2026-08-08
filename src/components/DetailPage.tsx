import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { STONES } from "../data/stones";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { localizeStone, type LocalizedStone } from "../i18n/localize";
import { Gallery } from "./Gallery";
import { StoneCard } from "./StoneCard";
import { StoneImage } from "./StoneImage";
import { Lightbox } from "./Lightbox";

type SpecKey = keyof LocalizedStone["specs"];
const SPEC_KEYS: SpecKey[] = ["thickness", "formats", "application", "hardness", "absorption"];

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const stone = STONES.find((s) => s.id === id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { lang } = useLang();
  const strings = UI[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightboxIndex(null);
  }, [id]);

  if (!stone) {
    return (
      <main className="wrap detail">
        <Link to="/" className="back-link">{strings.backToCatalog}</Link>
        <div className="empty-state">
          <h2>{strings.notFoundTitle}</h2>
          <p>{strings.notFoundText}</p>
        </div>
      </main>
    );
  }

  const localized = localizeStone(stone, lang);

  const specLabels: Record<SpecKey, string> = {
    thickness: strings.specThickness,
    formats: strings.specFormats,
    application: strings.specApplication,
    hardness: strings.specHardness,
    absorption: strings.specAbsorption,
  };

  const similar = STONES.filter(
    (s) => s.id !== stone.id && (s.type === stone.type || s.colorFamily === stone.colorFamily)
  ).slice(0, 4);

  return (
    <main className="wrap detail">
      <Link to="/" className="back-link">{strings.backToCatalog}</Link>

      <Gallery images={localized.images} alt={localized.name} />

      <div className="detail-head">
        <p className="detail-type">{localized.typeLabel}</p>
        <h1 className="detail-name">{localized.name}</h1>
        <p className="detail-origin">{localized.origin}</p>
      </div>

      {localized.finish.length > 0 && (
        <div className="finish-tags">
          {localized.finish.map((f, i) => (
            <span className="finish-tag" key={i}>{f}</span>
          ))}
        </div>
      )}

      <p className="detail-desc">{localized.description}</p>

      <h2 className="section-title">{strings.techInfoTitle}</h2>
      <dl className="spec-list">
        {SPEC_KEYS.map((key) => {
          const value = localized.specs[key];
          if (!value || (Array.isArray(value) && value.length === 0)) return null;
          return (
            <div className="spec-row" key={key}>
              <dt>{specLabels[key]}</dt>
              <dd>{Array.isArray(value) ? value.join(", ") : value}</dd>
            </div>
          );
        })}
      </dl>

      <h2 className="section-title">{strings.completedWorksTitle}</h2>
      {localized.projects.length > 0 ? (
        <div className="grid">
          {localized.projects.map((p, i) => (
            <button
              type="button"
              className="card project-card"
              key={i}
              onClick={() => setLightboxIndex(i)}
              aria-label={strings.zoomAriaLabel(p.caption || localized.name)}
            >
              <div className="card-thumb">
                <StoneImage src={p.image} alt={p.caption || localized.name} className="card-img" />
                <span className="project-zoom-hint" aria-hidden="true">⤢</span>
              </div>
              <p className="card-name">{p.caption}</p>
            </button>
          ))}
        </div>
      ) : (
        <p className="projects-note">{strings.completedWorksEmpty}</p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={localized.projects.map((p) => ({ src: p.image, alt: p.caption || localized.name, caption: p.caption }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}

      {similar.length > 0 && (
        <>
          <h2 className="section-title">{strings.similarStonesTitle}</h2>
          <div className="grid">
            {similar.map((s) => (
              <StoneCard key={s.id} stone={s} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
