import { LoadingButton } from '@mui/lab';
import { type SxProps, type Theme, Typography } from '@mui/material';

interface Props {
  type: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function AppButton({
  type,
  variant = 'contained',
  fullWidth,
  loading,
  children,
  sx,
}: Props) {
  return (
    <LoadingButton
      loading={loading}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      sx={{
        borderRadius: 2,
        height: { xs: 48, md: 56 },
        textTransform: 'none',
        ...sx,
      }}
    >
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </LoadingButton>
  );
}
