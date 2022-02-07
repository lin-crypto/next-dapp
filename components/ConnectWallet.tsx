import {
  Box,
  Button,
  Modal,
  Typography
} from '@mui/material'
import { useEthers } from '@usedapp/core'
import React from 'react'
import { walletconnect } from '../lib/connectors'
import { styled } from '@mui/system';

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #ffffff;
  border: 2px solid #000;
  box-shadow: 24;
  padding: 10;
`;

export function ConnectWallet(): JSX.Element {
  const { activate, activateBrowserWallet } = useEthers()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Connect
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Button onClick={() => { activateBrowserWallet(); handleClose(); }}>
            <img src="/images/logo-metamask.png" width={50} />
            <Typography variant="h5">MetaMask</Typography>
          </Button>
          <Button onClick={() => { activate(walletconnect); handleClose(); }}>
            <img src="/images/logo-walletconnect.svg" width={50} />
            <Typography variant="h5">WalletConnect</Typography>
          </Button>
        </ModalContent>
      </Modal>
    </>
  )
}
