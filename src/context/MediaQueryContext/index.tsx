import { createContext, useContext, useMemo } from 'react';
import { useMediaQuery } from '@mui/material';

export const MediaQueryContext = createContext({
  isMobile: false,
  isDesktop: false,
});

export const useMediaQueryContext = () => useContext(MediaQueryContext);

export const MediaQueryProvider = ({ children }: { children: JSX.Element }) => {
  const isMobile = useMediaQuery('screen and (max-width: 768px)');
  const isDesktop = useMediaQuery('screen and (min-width: 1248px)');

  const context = useMemo(
    () => ({ isMobile, isDesktop }),
    [isMobile, isDesktop]
  );

  return (
    <MediaQueryContext.Provider value={context}>
      {children}
    </MediaQueryContext.Provider>
  );
};
