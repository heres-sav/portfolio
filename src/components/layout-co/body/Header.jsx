import React from 'react';
import { Stack } from "@mui/material"
import { Logo, Title, ToggleMode } from "@layout";
import { Margin } from '@layout/body';

export const Header = () => {
  return <Margin>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo />
      <Title />
      <ToggleMode />
    </Stack>
  </Margin>
}