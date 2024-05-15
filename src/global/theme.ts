const darkTheme = {
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

    background: '#2E2E2E',
    backgroundTransparent: '#2E2E2EF2',

    backgroundCard: '#404040',

    backgroundField: '#FFFFFF17',

    error: '#FF3D3D',
    errorOpacity: '#FF3D3D17',
  },
  imgBrightness: 1,

  imgIntrodutionOpacity: 0.3,

  fontFamily: 'var(--font-default)',

  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    grays: {
      c12: '#FFFFFF',
      c11: '#F7F7F7',
      c10: '#EDEDED',
      c9: '#DEDEDE',
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
    background: '#F7F7F7',

    backgroundTransparent: '#f7f7f7f2',
    backgroundCard: '#FAFAFA',
    backgroundField: '#FFFFFF',
  },
  imgIntrodutionOpacity: 0.2,
  imgBrightness: 0,
};

export { darkTheme, lightTheme };
