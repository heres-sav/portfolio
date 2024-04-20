import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const StoryListItem = ({ index, data }) => (
  <Stack direction="row" spacing={2} borderTop="1px solid #000" padding="12px">
    <Typography variant="h4">{index}</Typography>
    <Box width="86px" height="86px" bgcolor="#D9D9D9" />
    <Stack>
      <Typography variant="h6" fontWeight={800}>{data.title}</Typography>
      <Typography variant='body2'>{data.description}</Typography>
    </Stack>
  </Stack>
)