import React, { useState } from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData } from 'react-router-dom';
import MenuContext from './utils/MenuContext';
import MenuHandlerContext from './utils/MenuHandlerContext';

function App() {
  const headerClosingFooterData = useLoaderData();
  const [menuOverlayStyles, setMenuOverlayStyles] = useState({
    menuDisplay: 'none',
    pagePosition: 'relative',
  });

  const handleMenuClick = () => {
    menuOverlayStyles.menuDisplay === 'none'
      ? setMenuOverlayStyles({ menuDisplay: 'block', pagePosition: 'fixed' })
      : setMenuOverlayStyles({ menuDisplay: 'none', pagePosition: 'relative' });
  };

  return (
    <MenuContext.Provider value={menuOverlayStyles}>
      <MenuHandlerContext.Provider value={handleMenuClick}>
        <Outlet context={headerClosingFooterData} />
      </MenuHandlerContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
