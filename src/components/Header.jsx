import { Stack } from "@mui/material"
import { NavigationBar, Title, ToggleMode, Ribbon } from "@components";

export const Header = () => {
  return <Stack>
    <Stack padding="8px 48px" direction="row" justifyContent="space-between" alignItems="center"
      boxShadow="0px 1px 12px 2px #0002">
      <Title />
      <Stack direction="row" spacing={2}>
        <NavigationBar />
        <ToggleMode />
      </Stack>
    </Stack>
    <Ribbon />
  </Stack>
}