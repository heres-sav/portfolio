import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@styles";
import { Route, RouterProvider, Routes } from "@context"
import { Background } from '@layout/body';
import { About, Work, Stories, Contact } from "@screens";
import { Footer, Header } from '@components';

function App() {
  return <ThemeProvider theme={theme}>
    <Background>
      <CssBaseline />
      <RouterProvider href="/">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouterProvider>
    </Background>
    <Footer />
  </ThemeProvider>
}

export default App;