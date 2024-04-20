import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles'

export const Margin = styled(Box)(({ theme }) => ({
  margin: "8px 24px",
  [theme.breakpoints.up('sm')]: {
    margin: "16px 60px",
  },
  [theme.breakpoints.up('md')]: {
    margin: "20px 80px",
  },
  [theme.breakpoints.up('lg')]: {
    margin: "20px 156px",
  }
}));