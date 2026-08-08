import { HashRouter, Routes, Route } from "react-router-dom";
import { CatalogPage } from "./components/CatalogPage";
import { DetailPage } from "./components/DetailPage";
import { AdminPage } from "./admin/AdminPage";
import { useLang } from "./i18n/LanguageContext";
import { UI } from "./i18n/ui";

function Footer() {
  const { lang } = useLang();
  return (
    <footer className="site-foot">
      <div className="wrap">{UI[lang].footerNote}</div>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/tosh/:id" element={<DetailPage />} />
        {/* TEMPORARY — remove this route (and src/admin/) once you're done editing products */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
