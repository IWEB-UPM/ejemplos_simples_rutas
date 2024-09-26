import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1>Contabilidad</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/recibos">Recibos</Link> |{' '}
        <Link to="/gastos">Gastos</Link>
      </nav>
      {/* Un <Outlet> renderiza cualquier ruta hija que esté activa en ese momento,
          así que puedes pensar en este <Outlet> como un marcador de posición para
          las rutas hijas que definimos anteriormente. */}
      <Outlet />
    </div>
  );
}