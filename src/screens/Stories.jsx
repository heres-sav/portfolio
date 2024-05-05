import React from 'react';
import { Stack, Typography } from '@mui/material';
import { StoryListItem } from '@layout';

const d = [
  {
    "title": "Step by Step guide of creating your own Javascript SDK",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    "title": "A day in the life of a freelance developer",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  }
]

export const Stories = () => {
  return <Stack flex={1} margin="12px 48px" spacing={2}>
    <Typography variant='body2' textTransform="uppercase">A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.</Typography>
    <Stack borderBottom="1px solid #000">{d.map((v, i) => <StoryListItem index={i+1} data={v} />)}</Stack>
  </Stack>
}