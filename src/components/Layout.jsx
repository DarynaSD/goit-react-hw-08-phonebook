import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from './Loader';
import { AppBar } from './AppBar';
import { Section } from './styled/Parts.styled';

export const Layout = () => {
  return (
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
