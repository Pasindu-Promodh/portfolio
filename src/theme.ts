// import { createTheme } from '@mui/material/styles';

// const arcadeCyberTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: '#00ffcc' }, // Neon cyan
//     secondary: { main: '#ff00ff' }, // Neon pink
//     background: { default: '#1a1a1a', paper: 'rgba(255, 255, 255, 0.05)' }, // Darker, subtler glass
//   },
//   typography: {
//     fontFamily: "'Press Start 2P', 'Roboto', sans-serif",
//     h1: { fontFamily: 'Press Start 2P', fontSize: '2rem', letterSpacing: '2px' },
//     body1: { fontFamily: 'Roboto', fontSize: '1rem' },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           border: '2px solid',
//           borderImage: 'linear-gradient(45deg, #00ffcc, #ff00ff) 1',
//           boxShadow: '0 0 8px rgba(0, 255, 204, 0.6)',
//           background: 'rgba(0, 0, 0, 0.3)',
//           '&:hover': {
//             animation: 'glitch 0.3s infinite',
//           },
//         },
//       },
//     },
//   },
// });

// export default arcadeCyberTheme;



import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    gradient?: {
      primary?: string;
      secondary?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#667eea',
      dark: '#5a67d8',
      light: '#7c8ef0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#764ba2',
      dark: '#6b3d91',
      light: '#8b5cb8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
    grey: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.12)',
    '0px 16px 32px rgba(0, 0, 0, 0.15)',
    '0px 20px 40px rgba(0, 0, 0, 0.18)',
    '0px 24px 48px rgba(0, 0, 0, 0.2)',
    '0px 28px 56px rgba(0, 0, 0, 0.22)',
    '0px 32px 64px rgba(0, 0, 0, 0.24)',
    '0px 36px 72px rgba(0, 0, 0, 0.26)',
    '0px 40px 80px rgba(0, 0, 0, 0.28)',
    '0px 44px 88px rgba(0, 0, 0, 0.3)',
    '0px 48px 96px rgba(0, 0, 0, 0.32)',
    '0px 52px 104px rgba(0, 0, 0, 0.34)',
    '0px 56px 112px rgba(0, 0, 0, 0.36)',
    '0px 60px 120px rgba(0, 0, 0, 0.38)',
    '0px 64px 128px rgba(0, 0, 0, 0.4)',
    '0px 68px 136px rgba(0, 0, 0, 0.42)',
    '0px 72px 144px rgba(0, 0, 0, 0.44)',
    '0px 76px 152px rgba(0, 0, 0, 0.46)',
    '0px 80px 160px rgba(0, 0, 0, 0.48)',
    '0px 84px 168px rgba(0, 0, 0, 0.5)',
    '0px 88px 176px rgba(0, 0, 0, 0.52)',
    '0px 92px 184px rgba(0, 0, 0, 0.54)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a67d8 0%, #6b3d91 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 16px 40px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 500,
        },
        outlined: {
          borderWidth: 2,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
  },
});

export default theme;