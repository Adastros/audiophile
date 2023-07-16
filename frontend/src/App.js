import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData } from 'react-router-dom';

function App() {
  const headerAndFooterData = useLoaderData();
  // console.log(headerData);

  return (
    <>
      <Outlet context={headerAndFooterData} />
    </>
  );
}

export default App;
