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
    {/* <Stack alignItems="center">
      <Typography variant="h4" marginBottom={4} fontFamily="Jersey 15">I ensure the platform to be</Typography>
      <Stack spacing={4} direction="row" justifyContent="space-between">
        <Symbol size={32} src={scale} label="Scalable" />
        <Symbol size={32} src={equalizer} label="Optimized" />
        <Symbol size={32} src={safe} label="Secure" />
        <Symbol size={32} src={userxperience} label="User Friendly" />
        <Symbol size={32} src={crossplatform} label="Cross Platform" />
        <Symbol size={32} src={network} label="Omni-Channel" />
      </Stack>
    </Stack> */}
  </Stack>
}