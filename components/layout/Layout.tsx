import { useEthers } from '@usedapp/core'
import NextLink from 'next/link'
import React from 'react'
import { Grid, Box, Typography, Button } from '@mui/material';
import { ConnectWallet } from '../ConnectWallet'
import { Head, MetaProps } from './Head'
import Background from './Background'
import { styled } from '@mui/system'

declare global {
  interface Window {
    ethereum: any
  }
}

function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...')
}

interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

const Navitem = styled(Typography)`
  cursor: pointer;
`;
export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const { account } = useEthers()

  return (
    <div className='whole'>
      <Background />
      <Head customMeta={customMeta} />
      <header className='header'>
        <Grid container>
          <NextLink href="/" passHref>
            <Navitem variant="h5" px={5}>Home</Navitem>
          </NextLink>
          <NextLink href="/trade" passHref>
            <Navitem variant="h5" px={5}>Trade</Navitem>
          </NextLink>
          <NextLink href="/farms" passHref>
            <Navitem variant="h5" px={5}>Farms</Navitem>
          </NextLink>
        </Grid>
        <Box px={5}>
          {account ? <Button variant="contained">{truncateHash(account)}</Button> : <ConnectWallet />}
        </Box>
      </header>
      <main className='main'>
        {children}
      </main>
      <footer className='footer'>
        <Grid container>
          <Grid item md={4}>
            <Typography variant='h6'>v1.0.0</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant='h6' align='center'>Next DApp</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant='h6' align='right'>ThomasLin</Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  )
}
