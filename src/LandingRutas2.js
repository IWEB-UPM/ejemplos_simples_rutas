import Usuario from "./rutas2/Usuario";
import NotFound from "./rutas2/NotFound";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


//diferencias con LandingRutas:
//- que las rutas tienen parámetros
//- que hay ruta para notfound
export default function LandingRutas2(props){
  let usuarios = [
    {nombre: "Enrique",
     apellidos: "Barra Arias",
     prime: true,
     aficiones: ["baloncesto", "música", "lectura"]},
     {nombre: "Pepe",
     apellidos: "Perez López",
     prime: true,
     aficiones: ["inversión", "música", "futbol"]},
     {nombre: "Jose",
     apellidos: "Morin Tatin",
     prime: false,
     aficiones: ["baloncesto", "tenis", "correr"]},
  ]
  /*
  //Cambiar los links "usuario 1" y "usuario 2" por este map para crear un link para cada usuario del array (haya 3 o 300)
  {usuarios.map((u,index) =>{
          let path = "/users/" + index; 
          return <span><Link to={path}>usuario {index}</Link>{"  "}|{"  "}</span>
        })}
  */
  return (<div>
      <h2>Usuarios</h2>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
        <Link to="/">Home</Link>|{" "}
        <Link to="/users/1">usuario 1</Link> |{" "}
        <Link to="/users/2">usuario 2</Link> |{" "}        
        <Link to="/rutarota">Ruta rota</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div>Página principal</div>} />
        <Route path="/users/:userId" element={<Usuario users={usuarios} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>);
}