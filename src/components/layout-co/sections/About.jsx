import React from 'react';
import { Stack, Typography } from '@mui/material';

export const About = () => {
  return <Stack margin="12px 0px" spacing={2}>
    <Typography variant="h4">Hello again</Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h3">I am</Typography>
      <Typography variant="h2" fontFamily="SignPainter">Sav</Typography>
    </Stack>
    <Typography variant="h4">I am a full stack developer from Kolkata, India.</Typography>
    <Typography variant='body2'>Over the past 4+ years, I've worked in various areas of digital design, including full stack development, and app UI/UX. I'm proud to have worn many hats.
These days, I focus on leading design at GiveDirectly, a nonprofit that lets donors send money directly to the world's poorest households.</Typography>
  </Stack>
}