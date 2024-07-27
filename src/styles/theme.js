import { createTheme } from '@mui/material/styles';

// Define your color palette
const theme = createTheme({
  palette: {
    mode: 'light', // Use 'dark' if you want a dark mode theme
    primary: {
      main: '#007bff', // Primary color similar to the example site
    },
    secondary: {
      main: '#6c757d', // Secondary color for accents
    },
    background: {
      default: '#f8f9fa', // Background color similar to the example
      paper: '#ffffff',   // Paper color for components like cards
    },
    text: {
      primary: '#343a40', // Primary text color
      secondary: '#6c757d', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Rounded corners for cards
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          fontSize: '2.5rem',
          marginBottom: '16px',
        },
        h2: {
          fontWeight: 600,
          fontSize: '2rem',
          marginBottom: '12px',
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.5,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1140px', // Custom container width
        },
      },
    },
  },
});

export default theme;
