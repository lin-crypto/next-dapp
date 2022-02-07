import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { styled } from '@mui/system';
import { Layout } from '../components/layout/Layout'

const CardContainer = styled(Grid)`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 50px;
`;

const ColorCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  padding: 50px;
  background: linear-gradient(to top, #2255dd, 40%, #00aadd);
  height: 450px;
  border-radius: 50px;
  cursor: pointer;
`;

const OfferCard = styled(Box)`
  position: relative;
  height: 300px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.5);
`;

const Image = styled(Box)`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
`;

function HomeIndex(): JSX.Element {
  return (
    <Layout>
      <CardContainer container>
        <Grid item xs={4}></Grid>
        <Grid item xs={8} container spacing={2}>
          <Grid item xs={4}>
            <ColorCard>
              <Box>
                <AgricultureIcon sx={{ fontSize: 100 }} />
                <Typography variant="h5" mt={3}>
                  In Farms
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  Earn Up To
                </Typography>
                <Typography variant="h3">
                  345.98%
                </Typography>
                <Typography variant="h5">
                  APR
                </Typography>
              </Box>
            </ColorCard>
          </Grid>
          <Grid item xs={4}>
            <ColorCard>
              <Box>
                <CurrencyExchangeIcon sx={{ fontSize: 100 }} />
                <Typography variant="h5" mt={3}>
                  In Vaults
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  Auto-Compounding
                </Typography>
                <Typography variant="h4">
                  ETH-BNB
                </Typography>
                <Typography variant="h5">
                  AVAILABLE
                </Typography>
              </Box>
            </ColorCard>
          </Grid>
          <Grid item xs={4}>
            <ColorCard>
              <Box>
                <StorefrontIcon sx={{ fontSize: 100 }} />
                <Typography variant="h5" mt={3}>
                  In Tanks
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography variant="h5">
                  Stake
                </Typography>
                <Typography variant="h4">
                  EARM TOKENS
                </Typography>
              </Box>
            </ColorCard>
          </Grid>
        </Grid>
      </CardContainer>
      <Grid container spacing={7} mt={10}>
        <Grid item xs={6}>
          <OfferCard>
            <Image>
              <img src="images/card 1.png" width={300} />
              <Typography variant='h4' align='center' mt={1} color="#cccccc">Transfer</Typography>
            </Image>
          </OfferCard>
        </Grid>
        <Grid item xs={6}>
          <OfferCard>
            <Image>
              <img src="images/card 2.png" width={300} />
              <Typography variant='h4' align='center' mt={5} color="#cccccc">Investment</Typography>
            </Image>
          </OfferCard>
        </Grid>
      </Grid>
      <Grid container spacing={7} mt={10}>
        <Grid item xs={6}>
          <OfferCard>
            <Image>
              <img src="images/card 3.png" width={300} />
              <Typography variant='h4' align='center' mt={5} color="#cccccc">Mine</Typography>
            </Image>
          </OfferCard>
        </Grid>
        <Grid item xs={6}>
          <OfferCard>
            <Image>
              <img src="images/card 4.png" width={300} />
              <Typography variant='h4' align='center' mt={4} color="#cccccc">Trade</Typography>
            </Image>
          </OfferCard>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomeIndex
