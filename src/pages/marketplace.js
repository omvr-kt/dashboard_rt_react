import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewSales } from 'src/sections/overview/overview-graph';

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
        >
          <Grid
            xs={6}
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
