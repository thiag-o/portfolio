const theme = {
  colors: {
    primary: '#FE4A3E',

    grays: {
      w: '#FFFFFF',
      c1: '#F7F7F7',
      c2: '#EDEDED',
      c3: '#DEDEDE',
      c4: '#CCCCCC',
      c5: '#B2B2B2',
      c6: '#9C9C9C',
      c7: '#717171',
      c8: '#595959',
      c9: '#404040',
      c10: '#2E2E2E',
      c11: '#111111',
      c12: '#000000',
    },
  },

  fontFamily: 'var(--font-default)',

  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    grays: {
      c12: '#FFFFFF',
      c11: '#F7F7F7',
      c10: '#F7F7F7',
      c9: '#EDEDED',
      c8: '#CCCCCC',
      c7: '#B2B2B2',
      c6: '#9C9C9C',
      c5: '#717171',
      c4: '#595959',
      c3: '#404040',
      c2: '#2E2E2E',
      c1: '#111111',
      w: '#000000',
    },
  },
};
console.log({ lightTheme, theme });

export { lightTheme, theme };
