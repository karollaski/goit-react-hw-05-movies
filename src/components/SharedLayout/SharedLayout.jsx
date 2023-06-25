import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.heading}>
        <nav className={css.navigation}>
          <NavLink className={css.navigationItem} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.navigationItem} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
