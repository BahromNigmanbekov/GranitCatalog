import { useEffect, useMemo, useState } from "react";
import { STONES } from "../data/stones";
import { normalize } from "../utils/normalize";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { consumeCatalogScroll } from "../utils/scrollMemory";
import { SearchBar } from "./SearchBar";
import { StoneCard } from "./StoneCard";

const PAGE_SIZE = 12;

export function CatalogPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const debouncedQuery = useDebouncedValue(query, 150);

  useEffect(() => {
    const savedY = consumeCatalogScroll();
    if (savedY !== null) {
      requestAnimationFrame(() => window.scrollTo(0, savedY));
    }
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(debouncedQuery);
    const result = q ? STONES.filter((s) => normalize(s.name).includes(q)) : STONES;
    return [...result].sort((a, b) => a.name.localeCompare(b.name));
  }, [debouncedQuery]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <header className="site-head">
        <div className="wrap">
          <p className="eyebrow">QR-katalog</p>
          <h1 className="site-title">Tabiiy tosh katalogi</h1>
          <p className="site-count">{filtered.length} ta tosh</p>

          <SearchBar
            value={query}
            onChange={(v) => {
              setQuery(v);
              setVisibleCount(PAGE_SIZE);
            }}
          />
        </div>
      </header>

      <main className="wrap">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <h2>Hech narsa topilmadi</h2>
            <p>Boshqa nom bilan qidiring.</p>
            <button type="button" className="btn-primary" onClick={() => setQuery("")}>
              Tozalash
            </button>
          </div>
        ) : (
          <>
            <div className="grid">
              {visible.map((stone) => (
                <StoneCard key={stone.id} stone={stone} />
              ))}
            </div>
            {visible.length < filtered.length && (
              <div className="load-more-row">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                >
                  Yana yuklash
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
