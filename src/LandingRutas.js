import Pagina from "./rutas/Pagina";
import OtraPagina from "./rutas/OtraPagina";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LandingRutas(props){


  return (<div>
      <h2>Mis primeras rutas</h2>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
        <Link to="/">Home</Link>|{" "}
        <Link to="/unapagina">Ver página 1</Link> |{" "}
        <Link to="/otra">Ver página 2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Página principal</div>} />
        <Route path="/unapagina" element={<Pagina />} />
        <Route path="/otra" element={<OtraPagina />} />
      </Routes>
    </div>);
}