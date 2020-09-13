const theme = {
  fonts: {
    body: 'Roboto,Helvetica,sans-serif',
  },
  fontWeight: {
    body: 'normal',
    bold: 700,
  },
  fontSizes: [12, 14],
  colors: {
    background: '#fff',
    primary: '#202124',
    secondary: '#5f6368',
    hover: '#e8eaed'
  },
  space: [10, 14, 32],
  text: {
    default: {
      fontFamily: 'body',
      fontSize: 1,
    },
    list: {
      new: {
        fontWeight: 'bold',
        fontSize: 1,
      },
      read: {
        fontSize: 1,
      },
    },
  },
  buttons: {
    primary: {
      color: 'primary',
      bg: 'background',
      '&:hover': {
        bg: 'hover',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
  forms: {
    primary: {
      color: '#313131',
      fontWeight: 600,
    },
  },
};

export default theme;