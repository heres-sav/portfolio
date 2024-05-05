import { createTheme, responsiveFontSizes } from "@mui/material";

const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#2A9D8F",
    },
  },
  typography: {
    fontFamily: "Outfit",
  }
});

themeConfig.typography.body2 = {
  fontSize: "12px",
  [themeConfig.breakpoints.up('sm')]: {
    fontSize: "14px",
  },
  [themeConfig.breakpoints.up('md')]: {
    fontSize: "1rem",
  },
  [themeConfig.breakpoints.up('lg')]: {
    fontSize: "1rem",
  }
};

export const theme = responsiveFontSizes(themeConfig);