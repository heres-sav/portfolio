import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
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

theme.typography.body2 = {
  fontSize: "12px",
  [theme.breakpoints.up('sm')]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: "1rem",
  }
};

export default responsiveFontSizes(theme);