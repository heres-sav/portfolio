import React from 'react';
import { Box, Typography, styled } from "@mui/material"

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Newsreader",
  fontWeight: "600",
  color: "white",
  userSelect: "none",
  fontSize: "1.2rem",
  [theme.breakpoints.up('sm')]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: "2rem",
  }
}));

export const Logo = () => {
  return <Box padding="12px 12px 6px 14px" bgcolor="black" borderRadius="12px">
    <Text>Sd.</Text>
  </Box>
}