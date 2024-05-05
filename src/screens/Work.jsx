import React from 'react';
import { Stack, Typography } from '@mui/material';
import { WorkListItem } from '@layout';

const d = [
  {
    "title": "Carry",
    "subtitle": "everything"
  },
  {
    "title": "Ideal for",
    "subtitle": "everything"
  }
]

export const Work = () => {
  return <Stack flex={1} margin="12px 48px" spacing={2}>
    <Typography variant='body2' textTransform="uppercase">A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.</Typography>
    <Stack borderBottom="1px solid #000">{d.map((v, i) => <WorkListItem index={i+1} data={v} />)}</Stack>
  </Stack>
}