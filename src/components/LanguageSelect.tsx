import { useEffect, useRef, useState } from "react";
import { UZ, RU, GB } from "country-flag-icons/react/3x2";
import { useLang } from "../i18n/LanguageContext";
import { LANGS, LANG_LABELS, LANG_SHORT_LABELS, type Lang } from "../i18n/types";
import { UI } from "../i18n/ui";

const FLAG_COMPONENTS: Record<Lang, typeof UZ> = { uz: UZ, ru: RU, en: GB };

export function LanguageSelect() {
  const { lang, setLang } = useLang();
  const strings = UI[lang];
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const Flag = FLAG_COMPONENTS[lang];

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lang-select" ref={rootRef}>
      <button
        type="button"
        className="lang-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={strings.languageSelectLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <Flag className="lang-flag" title={LANG_LABELS[lang]} />
        <span className="lang-select-code">{LANG_SHORT_LABELS[lang]}</span>
        <svg
          className={open ? "lang-select-chevron lang-select-chevron-open" : "lang-select-chevron"}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul className="lang-select-menu" role="listbox" aria-label={strings.languageSelectLabel}>
          {LANGS.map((l) => {
            const OptionFlag = FLAG_COMPONENTS[l];
            const active = l === lang;
            return (
              <li key={l} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={active ? "lang-option lang-option-active" : "lang-option"}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                >
                  <OptionFlag className="lang-flag" title={LANG_LABELS[l]} />
                  <span>{LANG_SHORT_LABELS[l]}</span>
                  {active && <span className="lang-option-dot" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
