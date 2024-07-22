// theme.js

import { createTheme } from '@mui/material/styles';

// Define a custom theme
const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light', depending on your preference
    primary: {
      main: '#1976d2', // example primary color
    },
    secondary: {
      main: '#f50057', // example secondary color
    },
  },
});

export default theme;
