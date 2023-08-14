export enum PathNames {
  index = '/',
  register = '/register',
  login = '/login',
}

export enum RequestStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
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
}: GetNavLinkButtonStylesProps) => 'button_active' | 'button';
