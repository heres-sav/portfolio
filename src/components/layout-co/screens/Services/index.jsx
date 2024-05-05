import React from 'react';
import { Stack, Typography } from "@mui/material"
import crossplatform from "@assets/cross-platform.png"
import equalizer from "@assets/equalizer.png"
import scale from "@assets/scale.png"
import safe from "@assets/safe.png"
import userxperience from "@assets/user-experience.png"
import network from "@assets/network.png"
import { Symbol } from './Symbol';

export const Services = () => {
  return <Stack margin="12px 0px">
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h3">Hello, I am</Typography>
      <Typography variant="h1" fontFamily="SignPainter">Sav</Typography>
    </Stack>
  </Stack>
}