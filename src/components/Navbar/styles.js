import { styled } from '../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  margin: '30px 104px 140px 140px',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogoBase = styled('h2', {
  fontSize: '24px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '900',
  lineHeight: '24px',
  letterSpacing: '0.2em',
  color: '#000000',
});

export const LogoAlt = styled('span', {
  fontSize: '24px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '0.2em',
  color: '#000000',
});

export const LinksContainer = styled('div', {
  display: 'flex',
  marginLeft: 'auto',
  gap: '25px',
  alignItems: 'center',
});

export const Links = styled('a', {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '600',
  fontSize: '16px',

  '&:hover': {
    color: '$main',
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(-2px)',
    cursor: 'pointer',
  },
});

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$main',
  border: '4px solid #000000',
  boxShadow: '4px 4px 0px #000000',
  width: '164px',
  height: '36px',
  color: '#000',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '600',
  fontSize: '16px',
  marginLeft: '5px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$secondary',
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(-2px)',
  },
});
