import PropTypes from 'prop-types';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import BatteryIcon from '@heroicons/react/24/solid/Battery50Icon';
import FireIcon from '@heroicons/react/24/solid/FireIcon';
import React, { useState, useEffect } from 'react';

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { usePopover } from 'src/hooks/use-popover';
import { AccountPopover } from './account-popover';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  const [batteryPercentage, setBatteryPercentage] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease battery percentage by 1 every minute
      setBatteryPercentage((prevPercentage) => {
        const newPercentage = prevPercentage - 1;

        // Reset to 98% when it reaches 23%
        if (newPercentage <= 23) {
          return 98;
        }

        return newPercentage;
      });
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval);
  }, []);

  const [temperature, setTemperature] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase or decrease temperature by 1
      setTemperature((prevTemperature) => {
        const randomChange = Math.random() > 0.5 ? 1 : -1;
        const newTemperature = prevTemperature + randomChange;

        // Reset to 45 when the difference is greater than 20
        if (Math.abs(newTemperature - 45) > 20) {
          return 45;
        }

        return newTemperature;
      });
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <SvgIcon fontSize="small">
                  <Bars3Icon />
                </SvgIcon>
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Battery">
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '15px' }}>{`${batteryPercentage}%`}</span>
                <IconButton>
                  <SvgIcon fontSize="small">
                    <BatteryIcon />
                  </SvgIcon>
                </IconButton>
              </div>
            </Tooltip>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Tooltip title="Battery">
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton>
                  <SvgIcon fontSize="small">
                    <FireIcon />
                  </SvgIcon>
                </IconButton>
                <span style={{ fontSize: '15px' }}>{`${temperature}°F`}</span>
              </div>
            </Tooltip>
            <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <UsersIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={accountPopover.handleOpen}
              ref={accountPopover.anchorRef}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40,
              }}
              src="/favicon-32x32 copie.png"
            />
          </Stack>
        </Stack>
      </Box>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};