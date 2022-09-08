import { useParams } from "react-router-dom";

export default function Usuario(props){
  let {userId} = useParams();

  let usuario = props.users[userId];

  return <div className="my-user">
    <b>{props.productName}</b>
    <ul>
      <li>Nombre: {usuario.nombre} </li>
      <li>Apellidos: {usuario.apellidos} </li>
      <li>Aficiones: {usuario.aficiones.join(",")}</li>
    </ul>
    </div>
}
