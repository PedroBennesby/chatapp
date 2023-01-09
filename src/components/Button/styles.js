import { styled } from '../../../stitches.config';

export const ButtonComponent = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '4px solid #000000',
  boxShadow: '4px 4px 0px #000000',
  width: '180px',
  height: '90px',
  color: '#000',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '600',
  fontSize: '18px',
  marginLeft: '5px',
  cursor: 'pointer',

  variants: {
    color: {
      yellow: {
        backgroundColor: '$main',
      },
      orange: {
        backgroundColor: '$secondary',
      },
      white: {
        backgroundColor: '$bg',
      },

      alt: {
        backgroundColor: '$main',
        width: '230px',
        height: '60px',
      },
    },
  },

  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(-2px)',
    filter: 'brightness(0.95)',
  },
});
