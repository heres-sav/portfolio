import { Box, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import Header from "./components/Header";

function App(): JSX.Element {
  return <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
}

export default App;