import { Box, Stack, Typography } from '@mui/material';

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
import { HEADER_HEIGHT_PX } from '../constants';
import PlanYourTripButton from './PlanYourTripButton';
import { Plane } from './Plane';

export default function Hero() {
  const { md, lg, xl } = useBreakpoints();

  return (
    <Stack
      sx={{
        justifyContent: { xs: 'flex-start', md: 'space-between' },
        alignItems: { xs: 'center', md: 'center', xl: 'space-between' },
        flexDirection: { xs: 'column', md: 'row' },
        mx: { xs: '1rem', md: '6.25rem' },
        mt: { xs: '1rem', md: '2rem', lg: '2rem', xl: '2rem' },
        maxHeight: '926px',
      }}
    >
      <Stack
        sx={{
          pb: { xs: 0, md: 2, lg: 4 },
          width: { xs: '100%', md: '70%', lg: '60%', xl: '47%' },
          height: '100%',
          alignItems: { md: 'center', lg: 'flex-start' },
        }}
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: { md: 'center', lg: 'space-between' },
            width: '100%',
            gap: { md: 3, lg: 4 },
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
              fontSize: {
                xs: '2rem',
                md: '2.5rem',
                xl: '3.75rem',
              },
              lineHeight: {
                xs: '3rem',
                md: '2.3rem',
                xl: '4.375rem',
              },
              color: (theme) => theme.palette.text.primary,
              fontWeight: FontWeights.bold,
              textAlign: { xs: 'center', md: 'left' },
              mb: 2,
              mt: { xs: 3, md: 2, lg: 3, xl: 16.25 },
            }}
          >
            Your Ultimate Trip Companion
          </Typography>
          <Typography
            variant="h6"
            sx={{
              lineHeight: { xs: '1.875rem', xl: '1.875rem' },
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
              mb: { xs: '1rem', md: '1.5rem', lg: 0 },
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
                    lg: '56px',
                  },
                }}
              >
                Learn more
              </AppButton>
            )}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{
            mt: '10rem',
            justifyContent: { xs: 'flex-start', md: 'flex-start' },
            alignItems: { xs: 'flex-start', md: 'center' },
            borderTop: `1px solid ${Colors.lightGrey}`,
            borderBottom: `1px solid ${Colors.lightGrey}`,
            maxWidth: { xs: '100%', md: 'auto' },
            maxHeight: { xs: '106px', md: 'auto' },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { xs: 'space-between', md: 'flex-start' },
              alignItems: { xs: 'space-between', md: '' },
              maxWidth: { xs: '100%', md: 'auto' },
              gap: { xs: 0, md: '1rem' },
              width: '100%',
            }}
          >
            <Stack
              sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: { xs: 'center', md: 'center' },
                gap: { xs: 0, md: '1rem' },
                width: { xs: '100%', md: '90%', lg: '80%' },
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
                  position: 'relative',
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
        </Stack>
      </Stack>

      {md && (
        <Stack
          flex={1}
          gap={3}
          direction="row"
          sx={{
            aspectRatio: 1 / 1,
            justifyContent: 'flex-start',
            alignItems: { md: 'center', xl: 'flex-start' },
            maxWidth: { xs: '100%', md: '24%', xl: '40%', lg: '25%' },
            maxHeight: {
              xs: 'auto',
              md: `calc(100vh - ${HEADER_HEIGHT_PX}px)`,
            },
            height: '100%',
          }}
        >
          <Stack
            gap={3}
            sx={{
              alignItems: { xs: 'center', md: 'flex-end' },
              justifyContent: 'flex-start',
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src={Trailer}
              alt="Camping van"
              borderRadius={10}
              sx={{
                maxWidth: { md: '80%', xl: '100%' },
                maxHeight: { xs: 'auto', md: '5%', lg: 'auto' },
                minWidth: 0,
              }}
            />
            <Box
              component="img"
              src={Beach}
              alt="Palm tree on a beach"
              borderRadius={10}
              sx={{
                maxWidth: { md: '80%', xl: '100%' },
                maxHeight: { xs: 'auto', md: '5%', lg: 'auto' },

                minWidth: 0,
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
                  width: '100%',
                  height: '100%',
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
