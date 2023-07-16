import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData } from 'react-router-dom';

function App() {
  const headerClosingFooterData = useLoaderData();

  return (
    <>
      <Outlet context={headerClosingFooterData} />
    </>
  );
}

export default App;
