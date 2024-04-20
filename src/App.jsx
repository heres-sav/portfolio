import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { Bar } from "@layout/navigation";
import { Route, RouterProvider, Routes } from "@common/router"
import { Background, Margin, Header, Footer } from '@layout/body';
import { About, Services, Work, Stories } from "@layout/sections";


function App() {
  return <ThemeProvider theme={theme}>
    <Background>
      <CssBaseline />
      <RouterProvider href="/">
        <Header />
        <Bar />
        <Routes>
          <Route path="/" element={<Margin flex={1} children={<Services />} />} />
          <Route path="/about" element={<Margin flex={1} children={<About />} />} />
          <Route path="/work" element={<Margin flex={1} children={<Work />} />} />
          <Route path="/stories" element={<Margin flex={1} children={<Stories />} />} />
        </Routes>
        <Footer />
      </RouterProvider>
    </Background>
  </ThemeProvider>
}

export default App;