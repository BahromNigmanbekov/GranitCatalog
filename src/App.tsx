import { HashRouter, Routes, Route } from "react-router-dom";
import { CatalogPage } from "./components/CatalogPage";
import { DetailPage } from "./components/DetailPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/tosh/:id" element={<DetailPage />} />
        <Route path="*" element={<CatalogPage />} />
      </Routes>
      <footer className="site-foot">
        <div className="wrap">
          Barcha toshlar do'konda mavjud. Namuna rangi ekranga qarab ozgina farq qilishi mumkin.
        </div>
      </footer>
    </HashRouter>
  );
}
