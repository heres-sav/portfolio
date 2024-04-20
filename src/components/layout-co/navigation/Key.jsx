import React from 'react';
import { Typography } from "@mui/material"
import Link from "@mui/material/Link"
import { styled } from "@mui/material/styles"
import { useRouter } from "@common/router"

const StyledLink = styled(Link)(({ theme, active, disabled }) => ({
  color: "black",
  backgroundColor: "black",
  padding: "4px 12px",
  margin: active && "0px 4px",
  borderRadius: active && 8,
  textDecoration: "none",
  userSelect: "none",
  pointerEvents: disabled ? "none" : "auto",
  [theme.breakpoints.up('sm')]: {
    padding: "4px 24px",
  },
  [theme.breakpoints.up('md')]: {
    padding: "4px 24px",
  },
  [theme.breakpoints.up('lg')]: {
    padding: "4px 24px",
  }
}));

const StyledType = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "11px",
  [theme.breakpoints.up('sm')]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: "1rem",
  }
}));

export const Key = ({ href, children }) => {
  const { state, navigate } = useRouter()
  const active = state.href === href
  const click = e => {
    e.preventDefault()
    navigate(href)
  }
  return <StyledLink active={active} disabled={active} href={href} onClick={click}>
    <Typography variant='body2' fontFamily="Outfit" color="white">{children}</Typography>
  </StyledLink>
}