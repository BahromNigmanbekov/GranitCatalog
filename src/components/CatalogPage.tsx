import { useEffect, useMemo, useState } from "react";
import { STONES } from "../data/stones";
import { normalize } from "../utils/normalize";
import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { consumeCatalogScroll } from "../utils/scrollMemory";
import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";
import { SearchBar } from "./SearchBar";
import { LanguageSelect } from "./LanguageSelect";
import { StoneCard } from "./StoneCard";

const PAGE_SIZE = 12;

export function CatalogPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { lang } = useLang();
  const strings = UI[lang];

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
          <p className="eyebrow">{strings.eyebrow}</p>
          <h1 className="site-title">{strings.siteTitle}</h1>
          <p className="site-count">{strings.countSuffix(filtered.length)}</p>

          <div className="controls-row">
            <SearchBar
              value={query}
              onChange={(v) => {
                setQuery(v);
                setVisibleCount(PAGE_SIZE);
              }}
            />
            <LanguageSelect />
          </div>
        </div>
      </header>

      <main className="wrap">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <h2>{strings.emptyTitle}</h2>
            <p>{strings.emptyText}</p>
            <button type="button" className="btn-primary" onClick={() => setQuery("")}>
              {strings.clearButton}
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
                  {strings.loadMore}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
