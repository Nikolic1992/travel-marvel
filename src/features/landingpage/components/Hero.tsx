import { Box, Divider, Stack, Typography } from '@mui/material';

import { APP_NAME } from '@config/constants';
import { AppRoutes } from '@config/routes';
import { Colors, theme } from '@config/styles';
import { FontWeights } from '@config/styles/FontWeights';
import AppButton from '@features/ui/AppButton';
import { useBreakpoints } from '@hooks/useBreakpoints';

import Beach from '../assets/desktop/beach.png';
import City from '../assets/desktop/city.png';
import Trailer from '../assets/desktop/desktop-trailer.png';
import GroupIcons from '../assets/desktop/group-icons.png';
import MobileTrailer from '../assets/mobile/mobile-trailer.png';
import PlanYourTripButton from './PlanYourTripButton';
import { Plane } from './Plane';

export default function Hero() {
  const { md, lg, xl } = useBreakpoints();

  return (
    <Stack
      sx={{
        justifyContent: 'space-between',
        alignItems: { xs: 'center', md: 'center', xl: 'flex-start' },
        flexDirection: { xs: 'column', md: 'row' },
        mx: { xs: '1rem', md: '6.25rem' },
        mt: { xs: '1rem', md: '2rem' },
      }}
    >
      <Stack
        sx={{
          maxWidth: '668px',
          width: '100%',
          height: 'auto',
          alignItems: { md: 'center', lg: 'flex-start' },
        }}
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: { md: 'center' },
            mb: { xs: '3rem', md: '8rem' },
          }}
        >
          {lg && <Plane />}
          {!md && (
            <Box
              component="img"
              src={MobileTrailer}
              sx={{ borderRadius: { xs: 6, md: 10 } }}
            />
          )}
          <Typography
            variant="h1"
            sx={{
              mb: '1rem',
              mt: { xs: '1.5rem', md: '8.125rem' },
              fontSize: {
                xs: '2rem',
                md: '2.5rem',
              },
              lineHeight: {
                xs: '3rem',
                md: '2.3rem',
              },
              color: (theme) => theme.palette.text.primary,
              fontWeight: FontWeights.bold,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Your Ultimate Trip Companion
          </Typography>
          <Typography
            variant="h6"
            sx={{
              lineHeight: { xs: '1.875rem' },
              [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
                lineHeight: '1.2rem',
              },
              color: (theme) => theme.palette.text.secondary,
              fontWeight: FontWeights.regular,
              mb: '2.5rem',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {`Welcome to ${APP_NAME} – Your Passport to Seamless Adventures!
            Discover, plan, and track your journeys effortlessly with our
            intuitive web application.`}
            {md && ` Start exploring now!`}
          </Typography>

          <Stack
            sx={{
              flexDirection: 'row',
              gap: '1rem',
            }}
          >
            <PlanYourTripButton fullWidth />

            {md && (
              <AppButton
                variant="outlined"
                fullWidth
                href={AppRoutes.signUp}
                sx={{
                  height: {
                    xs: '3.5rem',
                  },
                }}
              >
                Learn more
              </AppButton>
            )}
          </Stack>
        </Stack>
        <Divider
          sx={{
            borderColor: Colors.lightGrey,
            borderWidth: '1px',
            width: '100%',
            maxWidth: { xs: '100%', md: 'auto' },
            maxHeight: { xs: '106px', md: 'auto' },
          }}
        />
        <Stack
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'space-between', md: 'flex-start' },
            alignItems: { xs: 'space-between', md: '' },
            maxWidth: { xs: '100%', md: 'auto' },
            gap: { xs: 0, md: '1rem' },
            width: '100%',
            my: { xs: '1rem', md: '1.5rem' },
          }}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'center' },
              gap: { xs: 0, md: '1rem' },
              width: { xs: '100%', md: '80%' },
              maxHeight: { xs: '3.125rem', md: 'auto' },
            }}
          >
            <Typography
              variant="h2"
              sx={{ minWidth: { md: '11.2rem' }, color: Colors.black }}
            >
              1200+ users
            </Typography>

            <Box
              sx={{
                display: 'flex',
                width: '10.5rem',
                justifyContent: 'center',
                height: '3.44rem',
              }}
            >
              <img src={GroupIcons} />
            </Box>
            {md && (
              <Typography
                variant="subtitle1"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  minWidth: '10.4rem',
                }}
              >
                Track their trips in
                <br /> our App.
              </Typography>
            )}
          </Stack>
          {!md && (
            <Typography
              variant="subtitle1"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Track their trips in our App.
            </Typography>
          )}
        </Stack>

        <Divider
          sx={{
            borderColor: Colors.lightGrey,
            borderWidth: '1px',
            width: '100%',
            maxWidth: { xs: '100%', md: 'auto' },
            maxHeight: { xs: '106px', md: 'auto' },
            mb: '1.938rem',
          }}
        />
      </Stack>

      {md && (
        <Stack
          gap={3}
          direction="row"
          sx={{
            aspectRatio: 1 / 1,
            height: '100%',
            maxHeight: { md: '100vh', xl: '72vh' },
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Stack gap={3} sx={{ height: '100%' }}>
            <Box
              component="img"
              src={Trailer}
              alt="Camping van"
              borderRadius={10}
              sx={{
                maxWidth: { md: '80%', xl: '100%' },
                objectFit: 'cover',
              }}
            />
            <Box
              component="img"
              src={Beach}
              alt="Palm tree on a beach"
              borderRadius={10}
              sx={{
                maxWidth: { md: '80%', xl: '100%' },
                objectFit: 'cover',
              }}
            />
          </Stack>

          {xl && (
            <Stack
              sx={{
                alignItems: {
                  xs: 'center',
                  md: 'flex-start',
                },
              }}
            >
              <Box
                component="img"
                src={City}
                alt="Distance view of a sunset in a big city"
                sx={{
                  maxWidth: { md: '80%', xl: '100%' },
                  objectFit: 'cover',
                  borderTopRightRadius: '54px',
                  borderBottomRightRadius: '54px',
                }}
              />
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
}
