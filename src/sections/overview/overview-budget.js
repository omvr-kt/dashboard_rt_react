import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { difference, positive = false, negative, sx, value, icon: IconComponent, texttop, color, textbottom, icon2: IconComponent2 } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {texttop}
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: color,
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              {IconComponent && <IconComponent />}
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                 {IconComponent2 && <IconComponent2 />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}{negative ? '$' : '%'}
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              {textbottom}
            </Typography>
          </Stack>
        )}
        {!difference && (
          <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={0.5}
          >
        <Typography color="text.secondary" variant="caption">
              {textbottom}
        </Typography>
        </Stack>
        </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewBudget.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};