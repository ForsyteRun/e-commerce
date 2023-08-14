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
}: GetNavLinkButtonStylesProps) => 'button_active' | 'button';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginEmailFieldProps {
  values: {
    email: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface LoginPasswordFieldProps {
  type: string;
  values: {
    password: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void;
  icon: JSX.Element;
}

export enum InputType {
  Password = 'password',
  Text = 'text',
}

export type VoidFunction = () => void;
