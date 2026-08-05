import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { STONES, TYPE_LABELS, type StoneSpecs } from "../data/stones";
import { Gallery } from "./Gallery";
import { StoneCard } from "./StoneCard";
import { StoneImage } from "./StoneImage";

const SPEC_LABELS: Record<keyof StoneSpecs, string> = {
  thickness: "Qalinlik",
  formats: "Formatlar",
  application: "Qo'llanilishi",
  hardness: "Qattiqlik",
  absorption: "Namlik shimish",
};

export function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const stone = STONES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!stone) {
    return (
      <main className="wrap detail">
        <Link to="/" className="back-link">← Katalog</Link>
        <div className="empty-state">
          <h2>Tosh topilmadi</h2>
          <p>Havola noto'g'ri bo'lishi mumkin.</p>
        </div>
      </main>
    );
  }

  const similar = STONES.filter(
    (s) => s.id !== stone.id && (s.type === stone.type || s.colorFamily === stone.colorFamily)
  ).slice(0, 4);

  return (
    <main className="wrap detail">
      <Link to="/" className="back-link">← Katalog</Link>

      <Gallery images={stone.images} alt={stone.name} />

      <div className="detail-head">
        <p className="detail-type">{TYPE_LABELS[stone.type]}</p>
        <h1 className="detail-name">{stone.name}</h1>
        <p className="detail-origin">{stone.origin}</p>
      </div>

      {stone.finish.length > 0 && (
        <div className="finish-tags">
          {stone.finish.map((f) => (
            <span className="finish-tag" key={f}>{f}</span>
          ))}
        </div>
      )}

      <p className="detail-desc">{stone.description}</p>

      <h2 className="section-title">Texnik ma'lumot</h2>
      <dl className="spec-list">
        {(Object.keys(SPEC_LABELS) as (keyof StoneSpecs)[]).map((key) => {
          const value = stone.specs[key];
          return (
            <div className="spec-row" key={key}>
              <dt>{SPEC_LABELS[key]}</dt>
              <dd>{Array.isArray(value) ? value.join(", ") : value}</dd>
            </div>
          );
        })}
      </dl>

      <h2 className="section-title">Tugallangan ishlar</h2>
      {stone.projects.length > 0 ? (
        <div className="grid">
          {stone.projects.map((p, i) => (
            <div className="card" key={i}>
              <div className="card-thumb">
                <StoneImage src={p.image} alt={p.caption || stone.name} className="card-img" />
              </div>
              <p className="card-name">{p.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="projects-note">Bu tosh bilan bajarilgan ishlar tez orada shu yerga qo'shiladi.</p>
      )}

      {similar.length > 0 && (
        <>
          <h2 className="section-title">O'xshash toshlar</h2>
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
