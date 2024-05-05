import React from 'react';
import { List, Stack, Typography } from "@mui/material"
import { FooterItem } from "@components"
import figma from "@assets/figma.png"
import github from "@assets/github.png"
import linkedin from "@assets/linkedin.png"

export const Footer = () => {
  return <Stack padding="12px 48px" direction="row" justifyContent="space-between" alignItems="flex-end"
    bgcolor="#000">
    <Stack direction="row">
      <List>
        <FooterItem heading>Elsewhere</FooterItem>
        <FooterItem badge={<img src={figma} style={{ width: "20px"}} />} href="https://www.figma.com/@sav4">Figma</FooterItem>
        <FooterItem badge={<img src={github} style={{ width: "20px"}} />} href="https://github.com/heres-sav">Github</FooterItem>
        <FooterItem badge={<img src={linkedin} style={{ width: "20px"}} />} href="https://www.linkedin.com/in/savhere/">LinkedIn</FooterItem>
      </List>
      <List>
        <FooterItem heading>Contact</FooterItem>
        <FooterItem onClick={() => console.log("message clicked")}>Message</FooterItem>
      </List>
    </Stack>
    <Typography variant='body2' fontWeight="400" color="white">© 2024 Sav • Kolkata</Typography>
  </Stack>
}