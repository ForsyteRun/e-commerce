import { createContext } from 'react';
import { ModalProvider } from './ModalContext';
import { MediaQueryProvider } from './MediaQueryContext';

export const AppContext = createContext(null);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AppContext.Provider value={null}>
      <MediaQueryProvider>
        <ModalProvider>{children}</ModalProvider>
      </MediaQueryProvider>
    </AppContext.Provider>
  );
};
