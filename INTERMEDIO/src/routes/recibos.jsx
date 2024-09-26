import * as React from 'react';
import {  useLocation,  NavLink,  Outlet,  useSearchParams} from 'react-router-dom';
import { getRecibos } from '../data';

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Recibos() {
  let recibos = getRecibos();
  let [searchParams, setSearchParams] = useSearchParams({ replace: true });

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
        <input value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
        {recibos.filter((recibo) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = recibo.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).map((recibo) => (
            <QueryNavLink
              key={recibo.number}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/recibos/${recibo.number}`}
            >
              {recibo.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
