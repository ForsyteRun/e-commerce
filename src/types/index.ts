export enum PathNames {
  index = '/',
  register = '/register',
  login = '/login',
}

export interface NavLinkButtonProps {
  children: string;
  path: PathNames;
}

interface GetNavLinkButtonStylesProps {
  isActive: boolean;
}

export type GetNavLinkButtonStyles = ({
  isActive,
}: GetNavLinkButtonStylesProps) => 'button button_active' | 'button';
