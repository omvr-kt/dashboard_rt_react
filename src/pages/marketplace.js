import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { 
  Box, 
  Container, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Input, 
  Button,
  Unstable_Grid2 as Grid
} from '@mui/material';

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
            sm={3}
            lg={3}
          >
            <div style={{ marginTop:'5%', display: 'flex', justifyContent: 'space-between', margin: 0, boxSizing: 'border-box' }}>
              <OverviewOrderBook isBuy={false} position="left" />
              <OverviewOrderBook isBuy={false} position="right" />
            </div>
            <div style={{ height: '5%', marginBottom: '5%', display: 'flex', alignItems: 'center', justifyContent: '', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price USD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quantity (kWh)</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: 0, boxSizing: 'border-box' }}>
              <OverviewOrderBook isBuy={true} position="left" />
              <OverviewOrderBook isBuy={true} position="right" />
            </div>
          </Grid>
          <Grid item xs={7} lg={6}>
            {/* Composant du graphique "OverviewSales" */}
            <OverviewSales
              chartSeries={[
                {
                  name: 'This week',
                  data: [34, 42, 41, 36, 38, 30, 33]
                }
              ]}
              sx={{ height: '95%' }}
            />
          </Grid>

          <Grid item xs={2} lg={2}>
            <OrderComponent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

/* Def du composant pour passer un ordre d'achat ou de vente "OrderComponent" */
const OrderComponent = () => {
  // Gestionnaire pour le formulaire de soumission
  const handleOrderSubmit = (event) => {
    event.preventDefault();
    // Logique de traitement de l'ordre à faire ou pas car poc...
  };

  return (
    <form onSubmit={handleOrderSubmit}>
      <Typography variant="h6">Place Your Order</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="order-type">Order Type</InputLabel>
        <Select
          labelId="order-type-label"
          id="order-type"
          label="Order Type"
          // value et onChange pour contrôler le composant
        >
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="sell">Sell</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="quantity">Quantity (kWh)</InputLabel>
        <Input id="quantity" type="number" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="price">Price (USD)</InputLabel>
        <Input id="price" type="number" />
      </FormControl>
      <br></br><br></br>
      <Button type="submit" variant="contained" color="primary">
        Submit Order
      </Button>
    </form>
  );
};


Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
