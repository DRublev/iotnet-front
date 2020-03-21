export const colors = {
  grey: '#EBECF0',
  orange: '#F15F4E',
  yellow: '#F4D550',
  blue: '#426C95',
  coal: '#6D7587',
};

export const gradients = {
  orange2Yellow: `linear-gradient(184.26deg, ${colors.orange} 20.53%, ${colors.yellow} 79.85%)`,
  grey2White:
    'linear-gradient(347.02deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), #EBECF0',
};

export const shadows = {
  outer: {
    shadowRadius: 5,
    shadowOpacity: 1.0,
  }, //10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBFF
  inner: 'inset 5px 5px 10px #A6ABBD, inset -5px -5px 10px #FAFBFF',
};

const fonts = {
  main: {
    fontFamily: 'Roboto sans-serif',
    fontWeight: 'normal',
  },
};

export const borders = {
  rounded: {borderRadius: 20},
  main: {border: '1px solid rgba(255, 255, 255, 0.4)'},
};

export const button = {
  color: colors.coal,
  backgroundBlendMode: 'soft-light, normal',
  boxShadow: shadows.outer,
  backgroundColor: gradients.grey2White,
};

export const inputs = {
  simple: {
    ...borders.rounded,
    ...borders.main,
    backgroundColor: gradients.grey2White,
    boxShadow: shadows.inner,
  },
  withIcon: (iconName) => ({
    ...inputs.simple,
  }),
};

export const card = {
  shadowRadius: 4,
  shadowOpacity: 0.25,
  backgroundColor: '#EBECF0',
  width: 100,
  height: 100,
  padding: 1,
  alignItems: 'center',
  ...borders.rounded
};

export const container = {
  padding: 2,
  height: 1000,
  alignItems: 'center',
};
