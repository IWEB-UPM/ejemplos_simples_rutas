import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getRecibo, deleteRecibo } from '../data';

export default function Recibo() {
  let navigate = useNavigate();
  let params = useParams();
  let recibo = getRecibo(parseInt(params.reciboId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Debido: {recibo.amount}</h2>
      <p>
        {recibo.name}: {recibo.number}
      </p>
      <p>Fecha de vencimiento: {recibo.due}</p>
      <p>
        <button onClick={() => {
            deleteRecibo(recibo.number);
            navigate('/recibos');
          }}
        >
          Borrar
        </button>
      </p>
    </main>
  );
}
