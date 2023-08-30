import { createContext, useContext } from 'react';
import { useMediaQuery } from '@mui/material';

export const MediaQueryContext = createContext(false);

export const useMediaQueryContext = () => useContext(MediaQueryContext);

export const MediaQueryProvider = ({ children }: { children: JSX.Element }) => {
  const isMobile = useMediaQuery('screen and (max-width: 768px)');

  return (
    <MediaQueryContext.Provider value={isMobile}>
      {children}
    </MediaQueryContext.Provider>
  );
};
