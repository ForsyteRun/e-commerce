import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { useMediaQueryContext } from 'context/MediaQueryContext';

interface IModalContextUpdateFunctions {
  changeBurgerModalStatus: (value: boolean) => void;
  changeCatalogNavigationModalStatus: (value: boolean) => void;
}

interface IModalContext {
  isBurgerOpen: boolean;
  isCatalogNavigationOpen: boolean;
}

export const ModalContext = createContext({
  isBurgerOpen: false,
  isCatalogNavigationOpen: false,
});

export const UpdateModalContext = createContext<IModalContextUpdateFunctions>({
  changeBurgerModalStatus() {},
  changeCatalogNavigationModalStatus() {},
});

export const useModalContext = () => useContext(ModalContext);
export const useUpdateModalContext = () => useContext(UpdateModalContext);

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isCatalogNavigationOpen, setIsCatalogNavigationOpen] = useState(false);
  const { isMobile, isDesktop } = useMediaQueryContext();

  const context: IModalContext = useMemo(() => {
    return { isBurgerOpen, isCatalogNavigationOpen };
  }, [isBurgerOpen, isCatalogNavigationOpen]);

  const changeBurgerModalStatus = (value: boolean) => {
    if (isMobile) {
      setIsBurgerOpen(value);
    }
  };

  const changeCatalogNavigationModalStatus = (value: boolean) => {
    if (!isDesktop) {
      setIsCatalogNavigationOpen(value);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsBurgerOpen(false);
    }
  }, [isMobile, isBurgerOpen]);

  useEffect(() => {
    if (isDesktop) {
      setIsCatalogNavigationOpen(false);
    }
  }, [isDesktop, isCatalogNavigationOpen]);

  const updateContext = useMemo(() => {
    return {
      changeBurgerModalStatus,
      changeCatalogNavigationModalStatus,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isDesktop]);

  return (
    <ModalContext.Provider value={context}>
      <UpdateModalContext.Provider value={updateContext}>
        {children}
      </UpdateModalContext.Provider>
    </ModalContext.Provider>
  );
};
