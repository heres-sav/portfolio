import React from 'react';
import { Typography } from "@mui/material"
import Link from "@mui/material/Link"
import ListItem from "@mui/material/ListItem"
import { styled } from '@mui/material/styles'

const StyledLink = styled(Link)(({ heading }) => ({
  color: "black",
  userSelect: "none",
  pointerEvents: heading ? "none" : "auto"
}));

export const FooterItem = ({ heading, href, onClick, children }) => {
  const clickHandler = (e) => {
    if(onClick) {
      e?.preventDefault()
      onClick()
    }
  }
  return <ListItem sx={{ padding: "6px 12px" }}>
    <StyledLink heading={heading} href={href} onClick={clickHandler}>
      <Typography variant='body2' fontWeight={heading ? "600" : "400"}>{children}</Typography>
    </StyledLink>
  </ListItem>
}