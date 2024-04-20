import React from 'react';
import { List, Stack, Typography } from "@mui/material"
import { Margin } from '@layout/body';
import { FooterItem } from "@layout"
// import figma from "@assets/figma.png"
// import github from "@assets/github.png"
// import linkedin from "@assets/linkedin.png"

export const Footer = () => {
  return <Margin>
    <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
      <Stack direction="row">
        <List>
          <FooterItem heading>Elsewhere</FooterItem>
          <FooterItem href="https://figma.com">Figma</FooterItem>
          <FooterItem href="https://github.com">Github</FooterItem>
          <FooterItem>CV</FooterItem>
          <FooterItem href="https://linkedin.com">LinkedIn</FooterItem>
        </List>
        <List>
          <FooterItem heading>Contact</FooterItem>
          <FooterItem onClick={() => console.log("message clicked")}>Message</FooterItem>
        </List>
      </Stack>
      <Typography variant='body2' fontWeight="600">© 2024 Sav • Kolkata</Typography>
    </Stack>
  </Margin>
}