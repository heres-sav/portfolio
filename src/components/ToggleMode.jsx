import React, { useState } from 'react';
import { Box, Stack } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled, { keyframes } from "styled-components";

const right = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(12px);
  }
`;

const left = keyframes`
  from {
    transform: translateX(12px);
  }
  to {
    transform: translateX(0);
  }
`;

const GoRight = styled.div`
  padding: 2px;
  border-radius: 50px;
  animation: ${right} 0.2s linear forwards;
`

const GoLeft = styled.div`
  padding: 2px;
  border-radius: 50px;
  animation: ${left} 0.2s linear forwards;
`

export const ToggleMode = () => {
  const [mode, setMode] = useState('light');
  const toggle = () => {
    setMode(mode => {
      return mode == 'light' ? 'dark' : 'light';
    })
  }
  return <Stack width="40px" direction="row" border="1px solid #000" borderRadius="50px"
    bgcolor={mode == 'light' ? '#fff' : '#000'} alignItems="center" onClick={toggle} sx={{ cursor: 'pointer' }}>
    <Box fontSize="1rem" lineHeight={0}>
      {mode == 'light' ? <GoLeft>
        <LightModeIcon fontSize='inherit' htmlColor='black' />
      </GoLeft> :
      <GoRight>
        <DarkModeIcon fontSize='inherit' htmlColor='white' />
      </GoRight>}
    </Box>
  </Stack>
}