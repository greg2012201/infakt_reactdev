const theme = {
  colors: {
    blue: {
      50: '#E3F2FD',
      600: '#1E88E5',
    },
    grey: {
      200: '#E4E6E8',
      800: '#54585C',
    },
    black: {
      base: '#000000',
    },
    white: {
      base: '#FFFFFF',
    },
  },
  font: {
    size: {
      xsm: '12px',
      sm: '14px',
      md: '16px',
      lg: '24px',
    },
    lineHeight: {
      xsm: '16px',
      sm: '20px',
      md: '24px',
      lg: '32px',
    },
  },
} as const;

export default theme;
