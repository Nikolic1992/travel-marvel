import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { Box, Stack, Typography } from '@mui/material';

import { Colors } from '@config/styles';
import { FontWeights } from '@config/styles/FontWeights';
import Logo from '@features/ui/logo/Logo';
import { useBreakpoints } from '@hooks/useBreakpoints';

function Footer() {
  const { md } = useBreakpoints();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: '1920px',
        mx: 'auto',
        py: 3,
        textAlign: 'center',
        pb: 3,
      }}
    >
      <Logo
        isCentered
        isFooter
        isLanding
        sx={{
          mb: 2,
          width: '190px',
        }}
      />
      <Typography
        variant={md ? 'body1' : 'h6'}
        component="span"
        mb={0.5}
        sx={{ fontWeight: FontWeights.regular }}
      >
        Get in touch
      </Typography>
      <Typography
        variant="body1"
        component="span"
        color={(theme) => theme.palette.text.secondary}
        mb={4}
      >
        Contact us anytime for <br /> getting support
      </Typography>
      <Typography
        variant={md ? 'body1' : 'h6'}
        component="span"
        sx={{
          fontWeight: FontWeights.regular,
          mb: { xs: 1, md: 0.5 },
          color: Colors.black,
        }}
      >
        contact@<b>travel-marvel</b>.com
      </Typography>
      <Stack direction="row" sx={{ gap: '0.5rem', mt: '0.5rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: Colors.secondaryGreen,
            borderRadius: '0.25rem',
            width: '2rem',
            height: '2rem',
          }}
        >
          <InstagramIcon sx={{ color: Colors.primaryGreen }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: Colors.secondaryGreen,
            borderRadius: '0.25rem',
            width: '2rem',
            height: '2rem',
          }}
        >
          <FacebookIcon sx={{ color: Colors.primaryGreen }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: Colors.secondaryGreen,
            borderRadius: '0.25rem',
            width: '2rem',
            height: '2rem',
          }}
        >
          <XIcon sx={{ color: Colors.primaryGreen }} />
        </Box>
      </Stack>
    </Stack>
  );
}
export default Footer;
