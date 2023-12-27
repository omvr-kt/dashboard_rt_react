import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewSales } from 'src/sections/overview/overview-graph';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import OverviewOrderBook from 'src/sections/overview/overview-orderbook';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import ShoppingCartIcon from '@heroicons/react/24/solid/ShoppingCartIcon';
import ArrowTrendingUpIcon from '@heroicons/react/24/solid/ArrowTrendingUpIcon';
import ArrowsRightLeftIcon from '@heroicons/react/24/outline/ArrowsRightLeftIcon';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        RenewTech | Marketplace
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl"> 
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={4}
            lg={3}
          >
            <OverviewBudget
              difference={3.5}
              positive
              negative
              sx={{ height: '100%' }}
              value="56.8 kWh"
              icon={CurrencyDollarIcon}
              texttop="Total Bought"
              color="error.main"
              textbottom="average purchase price"
              icon2={ArrowsRightLeftIcon}
            />
          </Grid>
          <Grid
            xs={12}
            sm={4}
            lg={3}
          >
            <OverviewBudget
              difference={5.2}
              negative
              sx={{ height: '100%' }}
              value="26.7 kWh"
              icon={ShoppingCartIcon}
              texttop="Total Sold"
              color="success.main"
              textbottom="average selling price"
              icon2={ArrowsRightLeftIcon}
            />
          </Grid>
          <Grid
            xs={12}
            sm={4}
            lg={3}
          >
            <OverviewBudget
              sx={{ height: '100%' }}
              value="310 $ "
              icon={ArrowTrendingUpIcon}
              texttop="Total profit"
              color="grey"
              textbottom="since last month"
            />
          </Grid>
          <Grid
            xs={12}
            sm={4}
            lg={3}
          >
            <div style={{ height: '5%', marginBottom: '2.5%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>Price USD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity (kWh)</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 0, boxSizing: 'border-box' }}>
              <OverviewOrderBook isBuy={false} position="left" />
              <OverviewOrderBook isBuy={false} position="right" />
            </div>
            <div style={{ height: '5%', marginBottom: '2.5%', marginTop: '2.5%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>BUY / SELL</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 0, boxSizing: 'border-box' }}>
              <OverviewOrderBook isBuy={true} position="left" />
              <OverviewOrderBook isBuy={true} position="right" />
            </div>
          </Grid>
          <Grid
            xs={8}
            lg={6}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This week',
                  data: [34, 42, 41, 36, 38, 30, 33]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
