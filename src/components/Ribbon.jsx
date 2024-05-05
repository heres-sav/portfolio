import { Box, Stack, Typography } from "@mui/material"

const Seperator = () => (<Box height="4px" width="4px" margin="0px 12px" borderRadius="4px" bgcolor="white">o</Box>)

export const Ribbon = () => {
    return (
        <Stack flexWrap="nowrap" direction="row" bgcolor="black" padding="0px 48px" alignItems="center" overflow="hidden">
            <Typography overflow="visible" noWrap color="white" fontSize="0.8rem" fontWeight="600"
            >lorem ipsum</Typography>
            <Seperator />
            <Typography overflow="visible" noWrap color="white" fontSize="0.8rem" fontWeight="600"
            >lorem ipsum</Typography>
            <Seperator />
            <Typography overflow="visible" noWrap color="white" fontSize="0.8rem" fontWeight="600"
            >lorem ipsum</Typography>
        </Stack>
    )
}