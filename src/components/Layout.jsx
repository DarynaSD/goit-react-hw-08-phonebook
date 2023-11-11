import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from './Loader';
import { AppBar } from './AppBar';


export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
