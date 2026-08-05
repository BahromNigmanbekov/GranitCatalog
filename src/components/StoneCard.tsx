import { Link } from "react-router-dom";
import type { Stone } from "../data/stones";
import { StoneImage } from "./StoneImage";
import { saveCatalogScroll } from "../utils/scrollMemory";

interface Props {
  stone: Stone;
}

export function StoneCard({ stone }: Props) {
  return (
    <Link to={`/tosh/${stone.id}`} className="card" onClick={saveCatalogScroll}>
      <div className="card-thumb">
        <StoneImage src={stone.images[0]} alt={stone.name} className="card-img" />
      </div>
      <p className="card-name">{stone.name}</p>
    </Link>
  );
}
