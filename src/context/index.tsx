import { createContext } from 'react';
import { BurgerProvider } from './BurgerContext';
import { MediaQueryProvider } from './MediaQueryContext';

export const AppContext = createContext(null);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AppContext.Provider value={null}>
      <MediaQueryProvider>
        <BurgerProvider>{children}</BurgerProvider>
      </MediaQueryProvider>
    </AppContext.Provider>
  );
};
