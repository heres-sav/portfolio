import React from 'react';
import { Box, Stack, Typography, styled } from "@mui/material";

const SymbolCase = styled(Box)(({ theme }) => ({
  height: 72,
  width: 72,
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 50,
  backgroundColor: "#2A9D8F66",
  lineHeight: 0
}));

export const Symbol = ({ size, src, label }) => <Stack spacing={2} alignItems="center" width={90}>
	<SymbolCase>
		<img src={src} style={{ width: size, lineHeight: 0 }} />
	</SymbolCase>
	<Typography textAlign="center" textTransform="uppercase" fontWeight={800}>{label}</Typography>
</Stack>
