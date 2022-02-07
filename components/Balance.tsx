import { Typography } from '@mui/material'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { utils } from 'ethers'

/**
 * Component
 */
export function Balance(): JSX.Element {
  const { account } = useEthers()
  const etherBalance = useEtherBalance(account)
  const finalBalance = etherBalance ? utils.formatEther(etherBalance) : ''

  return <Typography>{finalBalance} ETH</Typography>
}
