import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData } from 'react-router-dom';

function App() {
  const headerAboutFooterData = useLoaderData();

  return (
    <>
      <Outlet context={headerAboutFooterData} />
    </>
  );
}

export default App;
