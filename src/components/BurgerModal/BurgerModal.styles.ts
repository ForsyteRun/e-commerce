import logo from 'assets/images/svg/logo.svg';

export const modal = {
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 10,
};

export const modalBox = {
  alignItems: 'center',
  background: `no-repeat url(${logo})`,
  backgroundPosition: '1.25rem 1rem',
  backgroundSize: '51.5px',
  backgroundColor: '#fff',
  boxShadow: '-2px 0 2px 3px rgba(0, 0, 0, 0.075)',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  maxWidth: '320px',
  padding: '1rem',
  position: 'absolute',
  width: '100%',
};
