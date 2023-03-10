import { createStitches } from '@stitches/react';

import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  '@import': ["url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')"]
});

globalStyles();

export const {
  styled,
  css,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#F2F7F2',
      brownDark800: '#2D232E',
      brownDark700: '#474448',
      brownDark600: '#534B52',
    },
    fontSizes: {
      12: '.75rem',
      13: '.8125rem',
      14: '.875rem',
      16: '1rem',
    },
    fonts: {
      primary: 'Poppins, sans-serif',
    },
  },
  media: {
    xs: '(min-width: 450px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1440px)',
  },
});