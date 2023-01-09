import { styled, globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
});

export const Container = styled('div', {
  display: 'flex',
  backgroundColor: '$bg',
  width: '100%',
  height: '100%',
  flexDirection: 'column',

  // border: '4px solid #000000',
});

export const HeroContainer = styled('div', {
  display: 'flex',
  marginLeft: '140px',
  justifyContent: 'space-between',
  marginRight: '97px',
});

export const LeftContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Title = styled('h1', {
  color: '$main',
  fontSize: '90px',
  lineHeight: '103px',
  fontWeight: 'bold',
  textShadow: '4px 4px 0px #000',
  WebkitTextStroke: '4px #000000',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
});

export const Subtitle = styled('h2', {
  color: '#000',
  fontSize: '20px',
  lineHeight: '24px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '900',
  margin: '23px 0 50px 0',
});

export const ButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
});

export const RightContainer = styled('div', {
  display: 'flex',
});

export const Image = styled('img', {
  width: '100%',
  height: '100%',

  variants: {
    cta: {
      true: {
        width: '748px',
        height: '559px',
      },
    },
  },
});

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '106px',
  padding: '0 140px 76px',
  backgroundColor: 'white',
});

export const SectionTitle = styled('h2', {
  color: '#141414',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500',
  fontSize: '45px',
  lineHeight: '68px',
  textAlign: 'center',
  margin: '72px 0 30px 0',

  variants: {
    big: {
      true: {
        fontSize: '65px',
        lineHeight: '98px',
        textAlign: 'left',
      },
    },
  },
});

export const SectionSubtitle = styled('p', {
  color: 'rgba(0, 0, 0, 0.7)',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '28px',
  textAlign: 'center',
  whiteSpace: 'pre-line',

  variants: {
    big: {
      true: {
        fontSize: '22px',
        textAlign: 'left',
      },
    },
  },
});

export const SubtitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '570px',
  marginBottom: '30px',
});

export const CtaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '122px',
});

export const CtaLeft = styled('div', {
  display: 'flex',
  marginRight: '69px',
});

export const CtaRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const CtaButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '50px',
  margin: '50px 0',
});

export const CtaDivider = styled('hr', {
  borderTop: '3px solid #000000',
  width: '268px',
});

export const CtaStarIconsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
  margin: '55px 0 120px ',
});

export const StarsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  margin: '0 12px 0 0',
});

export const CtaStarIcon = styled('img', {
  width: '32px',
  height: '32px',
});

export const CtaStarTitle = styled('p', {
  color: '#000000',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '18px',
  fontWeight: '600',
});

export const CtaStarSubtitle = styled('span', {
  color: '#000000',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '18px',
  fontWeight: '400',
});

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'row',
  padding: '95px 140px 10px',
  backgroundColor: '#FFF',
  gap: '128px',
});

export const FooterTitle = styled('h2', {
  color: '$main',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '900',
  fontSize: '23px',
  letterSpacing: '0.02em',
});

export const FooterSubtitle = styled('p', {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '400',
  fontSize: '13px',
  color: 'rgba(0, 0, 0, 0.7)',
  margin: '15px 0 240px 0',

  variants: {
    copyright: {
      true: {
        margin: '0',
      },
    },
  },
});

export const FooterTitleAlt = styled('span', {
  color: '$main',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '400',
  fontSize: '23px',
  letterSpacing: '0.02em',
});

export const FooterItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '13px',

  variants: {
    alt: {
      true: {
        gap: '0',
        marginRight: 'auto',
      },
    },
  },
});

export const FooterItemTitle = styled('h2', {
  color: '$text',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '400',
  fontSize: '18px',
});

export const FooterItem = styled('a', {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: '400',
  fontSize: '13px',
  color: 'rgba(0, 0, 0, 0.7)',

  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(-2px)',
    cursor: 'pointer',
  },
});
