import React, { useState } from 'react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Outlet, useLoaderData, ScrollRestoration } from 'react-router-dom';
import MenuContext from './utils/MenuContext';
import HandlerContext from './utils/HandlerContext';

function App() {
  const headerClosingFooterData = useLoaderData();
  const [menuOverlayStyles, setMenuOverlayStyles] = useState({
    menuDisplay: 'none',
    pagePosition: 'relative',
  });

  const handlers = {
    handleMenuClick: () => {
      if (menuOverlayStyles.menuDisplay === 'none') {
        setMenuOverlayStyles({ menuDisplay: 'block', pagePosition: 'fixed' });
      } else {
        setMenuOverlayStyles({
          menuDisplay: 'none',
          pagePosition: 'relative',
        });
      }
    },
    handleShopLinkClick: () => {
      setMenuOverlayStyles({ menuDisplay: 'none', pagePosition: 'relative' });
    },
  };

  return (
    <MenuContext.Provider value={menuOverlayStyles}>
      <HandlerContext.Provider value={handlers}>
        <Outlet context={headerClosingFooterData} />
        <ScrollRestoration />
      </HandlerContext.Provider>
    </MenuContext.Provider>
  );
}

export default App;
