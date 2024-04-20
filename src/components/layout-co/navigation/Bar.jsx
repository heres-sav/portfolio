import React from 'react';
import { Box, Stack, styled } from "@mui/material"
import { Key } from "@layout/navigation"

const LeftPadding = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "26px",
  maxWidth: "24px",
  backgroundColor: "black",
  [theme.breakpoints.up('sm')]: {
    height: "29px",
    maxWidth: "60px",
  },
  [theme.breakpoints.up('md')]: {
    height: "32px",
    maxWidth: "80px",
  },
  [theme.breakpoints.up('lg')]: {
    height: "32px",
    maxWidth: "156px",
  }
}));

const RightPadding = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "26px",
  backgroundColor: "black",
  [theme.breakpoints.up('sm')]: {
    height: "29px"
  },
  [theme.breakpoints.up('md')]: {
    height: "32px"
  },
  [theme.breakpoints.up('lg')]: {
    height: "32px"
  }
}));

export const Bar = () => {
  return <Stack width="100vw" direction="row" alignItems="center">
    <LeftPadding />
    <Stack direction="row">
      <Key href="/">Services</Key>
      <Key href="/about">About</Key>
      <Key href="/work">Work</Key>
      <Key href="/stories">Stories</Key>
      <Key href="/contact">Contact</Key>
    </Stack>
    <RightPadding />
  </Stack>
}