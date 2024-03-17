import { Stack, Typography } from "@mui/material"
import NavItem from "./NavItem"

const Navigator = () => {
  return <Stack direction="row" alignItems="center">
    <NavItem active link="/services">Services</NavItem>
    <NavItem link="/about">About</NavItem>
    <NavItem link="/work">Work</NavItem>
    <NavItem link="/stories">Stories</NavItem>
    <NavItem link="/contact" type="button" onClick={() => console.log("Contact clicked")}>Contact</NavItem>
  </Stack>
}

export default Navigator