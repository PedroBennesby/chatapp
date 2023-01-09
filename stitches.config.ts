import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      main: '#EEB539',
      bg: '#EFEFEF',
      secondary: '#FE8323',
      text: '#000000',
      paragraph: 'rgba(0, 0, 0, 0.7)',
    },
  },
});
