import { LoadingButton } from '@mui/lab';
import {
  type SxProps,
  type Theme,
  Typography,
  TypographyProps,
} from '@mui/material';

import { theme } from '@config/styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  sx?: SxProps<Theme>;
  LinkComponent?: React.ElementType;
  disabled?: boolean;
  href?: string;
  isSmall?: boolean;
  color?:
    | 'error'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning';
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  onClick?: () => void;
  typography?: TypographyProps['variant'];
  isLanding?: boolean;
}

export default function AppButton({
  type = 'button',
  variant = 'contained',
  fullWidth,
  children,
  sx,
  loading,
  isSmall,
  color,
  LinkComponent,
  href,
  endIcon,
  startIcon,
  typography,
  onClick,
  isLanding,
}: Props) {
  return (
    <LoadingButton
      LinkComponent={LinkComponent}
      href={href}
      loading={loading}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      endIcon={endIcon}
      color={color}
      startIcon={startIcon}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        height: {
          xs: variant === 'text' || isSmall ? 42 : 48,
          md: variant === 'text' || isSmall ? 48 : 56,
        },
        width: fullWidth ? '100%' : 'fit-content',
        textTransform: 'none',
        cursor: 'pointer',
        ...sx,
      }}
    >
      <Typography
        component="span"
        variant={typography || 'body2'}
        sx={{
          ...(isLanding && {
            [theme.breakpoints.down('md')]: {
              fontSize: '1.125rem',
              lineHeight: '1.688rem',
            },
          }),
        }}
      >
        {children}
      </Typography>
    </LoadingButton>
  );
}
