import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SxProps, Theme } from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';

interface Props {
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
}

function PlanYourTripButton({ fullWidth, sx }: Props) {
  return (
    <AppButton
      isLanding
      onClick={() => {}}
      endIcon={<ArrowForwardIcon />}
      fullWidth={fullWidth}
      sx={{ ...sx, height: '3.5rem' }}
      href={AppRoutes.signUp}
    >
      Plan your trip
    </AppButton>
  );
}

export default PlanYourTripButton;
