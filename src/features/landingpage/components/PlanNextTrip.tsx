import { Stack, Typography } from '@mui/material';

import { useBreakpoints } from '@hooks/useBreakpoints';

import PlaneBackground from '../assets/desktop/desktop-plane-background.png';
import MobilePlaneBackground from '../assets/mobile/mobile-plane-background.png';
import PlanYourTripButton from './PlanYourTripButton';

function PlanNextTrip() {
  const { sm } = useBreakpoints();
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: sm
          ? `url(${PlaneBackground})`
          : `url(${MobilePlaneBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '384px',
        gap: 4,
        px: { xs: 2, md: 0 },
        py: { xs: 4, md: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontSize: '3.125rem',
          lineHeight: '3,437rem',
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        Let's plan your next trip together?
      </Typography>
      <PlanYourTripButton sx={{ width: { xs: '100%', md: '16.25rem' } }} />
    </Stack>
  );
}
export default PlanNextTrip;
