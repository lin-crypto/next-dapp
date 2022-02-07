import NextLink from 'next/link'
import React from 'react'
import { Box, Typography, Button } from '@mui/material'

function Farms(): JSX.Element {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        backgroundImage: "url('/images/comingsoonbg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <Typography variant="h1" color='white'>COMING SOON</Typography>
        <NextLink href="/" passHref>
          <Button variant='outlined'>
            Go to Home
          </Button>
        </NextLink>
      </Box>
    </Box>
  )
}

export default Farms
