import { Box, Stack } from "@mui/material"
import Logo from "./Logo";
import Navigator from "./Navigator";

const Header = () => {
  return <Stack direction="row" justifyContent="space-between">
    <Logo />
    <Navigator />
  </Stack>
}

export default Header;