import { useLang } from "../i18n/LanguageContext";
import { UI } from "../i18n/ui";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  const { lang } = useLang();
  const strings = UI[lang];

  return (
    <div className="search-bar">
      <svg
        className="search-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        className="search-input"
        placeholder={strings.searchPlaceholder}
        aria-label={strings.searchAriaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-clear"
          aria-label={strings.clearSearchAriaLabel}
          onClick={() => onChange("")}
        >
          ×
        </button>
      )}
    </div>
  );
}
