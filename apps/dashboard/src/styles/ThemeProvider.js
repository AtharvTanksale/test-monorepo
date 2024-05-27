import { createTheme } from "@camonk/design-system";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#faf9ff",
      paper: "#ffffff",
    },
    primary: {
      main: "#453FE1",
      dark: "#302C9D",
      light: "#6A65E7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#9c27b0",
      dark: "#6D1B7B",
      light: "#AF52BF",
      contrastText: "#ffffff",
    },

    success: {
      main: "#3FC211",
      dark: "#2C870B",
      light: "#65CE40",
      contrastText: "#fff",
    },

    error: {
      main: "#f10000",
      dark: "#A80000",
      light: "#F33333",
      contrastText: "#fff",
    },

    text: {
      title: "#374151",
      body: "#3C4852",
    },

    grey: {
      0: "#fff",
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },

    navbar: {
      main: "#fff",
      contrastText: "#000",
    },

    labelBackground: "#fff",

    iconBackground: "#E6F0FF",
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: "'DM Sans', 'Source Sans 3', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "4.80rem",

      "@media (max-width: 700px)": {
        fontSize: "3.6rem",
      },
    },
    h2: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "3.60rem",

      "@media (max-width: 700px)": {
        fontSize: "2.8rem",
      },
    },
    h3: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "2.80rem",

      "@media (max-width: 700px)": {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "2.40rem",

      "@media (max-width: 700px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
      fontSize: "2rem",

      "@media (max-width: 700px)": {
        fontSize: "1.8rem",
      },
    },
    subtitle2: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600,
      fontSize: "1.6rem",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },

    body1: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 400,
      fontSize: "1.8rem",

      "@media (max-width: 700px)": {
        fontSize: "1.6rem",
      },
    },

    body2: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 400,
      fontSize: "1.6rem",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },
    caption: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: "1.3rem",

      "@media (max-width: 700px)": {
        fontSize: "1.1rem",
      },
    },
    button: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "none",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },
    overline: {
      fontFamily: "'Source Sans 3', sans-serif",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-sizeSmall": {
            fontSize: "1.4rem",

            "@media (max-width: 700px)": {
              fontSize: "1.2rem",
            },
          },
          "&.MuiButton-sizeMedium": {
            fontSize: "1.6rem",
            "@media (max-width: 700px)": {
              fontSize: "1.4rem",
            },
          },
          "&.MuiButton-sizeLarge": {
            fontSize: "2rem",
            "@media (max-width: 700px)": {
              fontSize: "1.6rem",
            },
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#111827",
      paper: "#18212F",
    },

    primary: {
      main: "#6B66FF",
      dark: "#4A47B2",
      light: "#8884FF",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#9c27b0",
      dark: "#6D1B7B",
      light: "#AF52BF",
      contrastText: "#ffffff",
    },

    success: {
      main: "#3FC211",
      dark: "#2C870B",
      light: "#65CE40",
      contrastText: "#fff",
    },

    error: {
      main: "#f10000",
      dark: "#A80000",
      light: "#F33333",
      contrastText: "#fff",
    },

    grey: {
      0: "#fff",
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },

    navbar: {
      main: "#1e1e1e",
      contrastText: "#fff",
    },

    labelBackground: "#1e1e1e",

    iconBackground: "#8884FF",
  },

  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: "'DM Sans', 'Source Sans 3', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "4.80rem",

      "@media (max-width: 700px)": {
        fontSize: "3.6rem",
      },
    },
    h2: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "3.60rem",

      "@media (max-width: 700px)": {
        fontSize: "2.8rem",
      },
    },
    h3: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: "2.80rem",

      "@media (max-width: 700px)": {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: "2.40rem",

      "@media (max-width: 700px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 500,
      fontSize: "2rem",

      "@media (max-width: 700px)": {
        fontSize: "1.8rem",
      },
    },
    subtitle2: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 600,
      fontSize: "1.6rem",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },

    body1: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 400,
      fontSize: "1.8rem",

      "@media (max-width: 700px)": {
        fontSize: "1.6rem",
      },
    },

    body2: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 400,
      fontSize: "1.6rem",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },
    caption: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: "1.3rem",

      "@media (max-width: 700px)": {
        fontSize: "1.1rem",
      },
    },

    button: {
      fontFamily: "'Source Sans 3', sans-serif",
      fontWeight: 500,
      fontSize: "1.6rem",
      textTransform: "none",

      "@media (max-width: 700px)": {
        fontSize: "1.4rem",
      },
    },
    overline: {
      fontFamily: "'Source Sans 3', sans-serif",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-sizeSmall": {
            fontSize: "1.4rem",

            "@media (max-width: 700px)": {
              fontSize: "1.2rem",
            },
          },
          "&.MuiButton-sizeMedium": {
            fontSize: "1.6rem",
            "@media (max-width: 700px)": {
              fontSize: "1.4rem",
            },
          },
          "&.MuiButton-sizeLarge": {
            fontSize: "2rem",
            "@media (max-width: 700px)": {
              fontSize: "1.6rem",
            },
          },
        },
      },
    },
  },
});
export { lightTheme, darkTheme };
