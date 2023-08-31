import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useMediaQueryContext } from 'context/MediaQueryContext';

export const BurgerContext = createContext(false);
export const UpdateBurgerContext = createContext<(value?: boolean) => void>(
  () => {}
);

export const useBurgerContext = () => useContext(BurgerContext);
export const useUpdateBurgerContext = () => useContext(UpdateBurgerContext);

export const BurgerProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQueryContext();

  const changeModalStatus = useCallback(
    (value: boolean = !isOpen) => {
      if (isMobile) {
        setIsOpen(value);
      }
    },
    [isOpen, isMobile]
  );

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <BurgerContext.Provider value={isOpen}>
      <UpdateBurgerContext.Provider value={changeModalStatus}>
        {children}
      </UpdateBurgerContext.Provider>
    </BurgerContext.Provider>
  );
};
