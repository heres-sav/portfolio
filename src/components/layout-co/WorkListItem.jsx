import React from "react";
import { Box, Stack, Typography } from "@mui/material";

export const WorkListItem = ({ index, data }) => (
  <Stack direction="row" spacing={2} borderTop="1px solid #000" padding="12px">
    <Typography>{index}</Typography>
    <Box width="124px" height="124px" bgcolor="#D9D9D9" />
    <Stack>
      <Typography variant="h3" fontWeight={800}>{data.title}</Typography>
      <Typography variant="h3" fontFamily="SignPainter" fontWeight={600}>{data.subtitle}</Typography>
    </Stack>
  </Stack>
)