import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Gastos from './routes/gastos';
import Recibos from './routes/recibos';
import Recibo from './routes/recibo';
import './main.css';

export default function Main(props){

    return <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="gastos" element={<Gastos />} />
        <Route path="recibos" element={<Recibos />}>
          <Route index element={
              <main style={{ padding: '1rem' }}>
                <p>Selecciona un recibo</p>
              </main>
            }
          />
          <Route path=":reciboId" element={<Recibo />} />
        </Route>
        <Route path="*"element={
            <main style={{ padding: '1rem' }}>
              <p>No hay nada aquí!</p>
            </main>
          }
        />
      </Route>
    </Routes>
}