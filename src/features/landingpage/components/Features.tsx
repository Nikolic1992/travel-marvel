import { Box, Stack, Typography } from '@mui/material';

import { APP_NAME } from '@config/constants';
import { Colors } from '@config/styles';
import { FontFamilies } from '@config/styles/FontFamilies';
import { FontWeights } from '@config/styles/FontWeights';
import { useBreakpoints } from '@hooks/useBreakpoints';

import DesktopExpenses from '../assets/desktop/desktop-expenses.png';
import DesktopTrips from '../assets/desktop/desktop-trips.png';
import MobileExpenses from '../assets/mobile/mobile-expenses.png';
import MobileTrips from '../assets/mobile/mobile-trips.png';
import PlanYourTripButton from './PlanYourTripButton';

const imgStyles = {
  height: '100%',
  borderRadius: '0.625rem',
  overflow: 'hidden',
  maxWidth: '810px',
  objectFit: 'contain',
  boxShadow: `
    0px 0px 0px 0px #0F21371A,
    -3px 4px 11px 0px #0F21371A,
    -13px 15px 20px 0px #0F213717,
    -29px 34px 27px 0px #0F21370D,
    -51px 60px 32px 0px #0F213703,
    -80px 94px 35px 0px #0F213700
  `,
};

export default function Features() {
  const { sm, md } = useBreakpoints();
  return (
    <Stack
      sx={{
        mt: { xs: '4.25rem', md: '4.75rem' },
        mx: { xs: '1rem', md: '6.25rem' },
      }}
      alignItems="center"
    >
      <Typography
        variant="h6"
        color={(theme) => theme.palette.primary.main}
        sx={{ lineHeight: '2.187rem' }}
      >
        FEATURES
      </Typography>
      <Typography
        sx={{
          fontFamily: FontFamilies.poppins,
          fontWeight: FontWeights.semibold,
          fontSize: { xs: '1.625rem', md: '2.5rem' },
          lineHeight: { xs: '2.25rem', md: '4.375rem' },
          textAlign: 'center',
        }}
      >
        {APP_NAME} best solution for travel
      </Typography>

      <Stack
        flex={1}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { md: 'space-between' },
          alignItems: { xs: 'center', md: 'center' },
          pb: { xs: '2rem', md: '4.5rem' },
          width: '100%',
          borderBottom: `1px solid ${Colors.lightGrey}`,
          mt: { xs: '2rem', md: '4rem' },
        }}
      >
        <Box
          component="img"
          src={sm ? DesktopTrips : MobileTrips}
          alt="User's upcoming and saved trips"
          sx={{
            ...imgStyles,
            mb: { xs: 3, md: 0 },
            mr: { xs: 0, md: 3 },
            width: '100%',
            minWidth: { xs: '100%', md: '40%' },
            maxWidth: { md: '50%' },
          }}
        />
        <Box sx={{ maxWidth: { xs: '100%', md: '650px' } }}>
          <Typography
            variant="h6"
            color={(theme) => theme.palette.primary.main}
          >
            DASHBOARD
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.187rem' },
              lineHeight: { xs: '2.25rem', md: '3.125rem' },
              mt: '0.5rem',
              mb: { xs: '1rem', md: '1.5rem' },
            }}
          >
            Organize All Your Trips in a Single Application
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: FontWeights.regular,
              color: (theme) => theme.palette.text.secondary,
              mb: { xs: '1rem', md: '1.5rem' },
              letterSpacing: '0.15px',
            }}
          >
            With our intuitive application, you can effortlessly organize all
            your trips in one convenient location. From itinerary details and
            booking confirmations to travel notes and essential documents,
            everything you need for a smooth and stress-free journey is just a
            tap away. Enjoy a clutter-free travel experience and stay in control
            of your adventures with ease.
          </Typography>
          <PlanYourTripButton fullWidth={!md} sx={{ minWidth: '16.25rem' }} />
        </Box>
      </Stack>

      <Stack
        flex={1}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { md: 'space-between' },
          alignItems: { xs: 'center', md: 'center' },
          pb: { xs: '2rem', md: '4.5rem' },
          width: '100%',
          mt: { xs: '2rem', md: '4rem' },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '650px' } }}>
          <Typography
            variant="h6"
            color={(theme) => theme.palette.primary.main}
          >
            EXPENSES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.187rem' },
              lineHeight: { xs: '2.25rem', md: '3.125rem' },
              mt: '0.5rem',
              mb: { xs: '1rem', md: '1.5rem' },
            }}
          >
            Expense Tracking for Your Travels
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: FontWeights.regular,
              color: (theme) => theme.palette.text.secondary,
              mb: { xs: '1rem', md: '1.5rem' },
              letterSpacing: '0.15px',
            }}
          >
            Keep a Close Watch on Your Travel Costs with our User-Friendly
            Expense Tracking Solution. Set budget goals, receive real-time
            updates, and make informed decisions to ensure you get the most out
            of your travel experiences without any financial surprises. Travel
            with confidence, knowing that your expenses are well-managed and
            under control
          </Typography>
          <PlanYourTripButton fullWidth={!md} sx={{ minWidth: '16.25rem' }} />
        </Box>

        <Box
          component="img"
          src={sm ? DesktopExpenses : MobileExpenses}
          alt="User's expenses screen"
          sx={{
            ...imgStyles,
            mr: 0,
            ml: { xs: 0, md: '1.5rem' },
            width: '100%',
            mb: { xs: '1.5rem', md: 0 },
            minWidth: { xs: '100%', md: '40%' },
          }}
        />
      </Stack>
    </Stack>
  );
}
