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
  outer: [
    {
      color: '#000',
      offset: {
        width: 10,
        height: 10,
      },
      radius: 5,
      opacity: 1.0,
    },
    {
      color: '#fff',
      offset: {
        width: -10,
        height: -10,
      },
      radius: 20,
      opacity: 1.0,
    },
  ], //10px 10px 20px #A6ABBD, -10px -10px 20px #FAFBF
  inner: 'inset 5px 5px 10px #A6ABBD, inset -5px -5px 10px #FAFBFF',
};

const fonts = {
  main: {
    fontFamily: 'Roboto sans-serif',
    fontWeight: 'normal',
  },
};

export const borders = {
  rounded: {borderRadius: 47},
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
  shadowColor: colors.yellow,
  shadowOffset: {
    width: 10,
    height: 3,
  },
  elevation: 1,
  shadowRadius: 20,
  shadowOpacity: 1.0,
  padding: 1,
};

export const container = {
  backgroundColor: '#EBECF0',
  padding: 2,
  height: 100,
};
