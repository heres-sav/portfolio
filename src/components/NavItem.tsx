import { Typography, TypographyProps } from "@mui/material";
import Link, { LinkProps } from "@mui/material/Link"
import { styled } from '@mui/material/styles'

export interface NavItemProps {
  active?: boolean,
  link?: string,
  children: string,
  type?: "link" | "button",
  onClick?: () => void
}

export interface StyledLinkProps extends LinkProps {
  active?: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>(({ active, theme }) => ({
  color: "black",
  backgroundColor: active ? "#2A9D8F" : "transparent",
  padding: "12px 24px",
  borderRadius: "24px",
  textDecoration: "none"
}));

export interface StyledTypeProps extends TypographyProps {
  active?: boolean
}

const StyledType = styled(Typography)<StyledTypeProps>(({ active, theme }) => ({
  color: active ? "primary.main" : "black"
}));

const NavItem = ({ active, link, children, type="link", onClick }: NavItemProps) => {
  const clickHandler = (e: { preventDefault: any }) => {
    if(type === "button" && onClick) {
      e?.preventDefault()
      onClick()
    }
  }
  return <StyledLink active={active} href={link} onClick={clickHandler}>
    <StyledType fontFamily="Outfit">{children}</StyledType>
  </StyledLink>
}

export default NavItem