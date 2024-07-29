import { Box, Stack, Typography } from '@mui/material';

import { Colors } from '@config/styles';
import { FontFamilies } from '@config/styles/FontFamilies';
import { FontWeights } from '@config/styles/FontWeights';

import CameraIcon from '../assets/desktop/camera-icon.png';
import FoldersIcon from '../assets/desktop/folders-icon.png';
import LocationIcon from '../assets/desktop/location-icon.png';

function Advantages() {
  return (
    <Stack
      sx={{
        mt: { xs: 0, md: '10rem' },
        mb: { xs: '2.063rem', md: '9rem' },
        mx: { xs: 0, md: '6.25rem' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" color={(theme) => theme.palette.primary.main}>
        ADVANTAGES
      </Typography>
      <Typography
        sx={{
          fontFamily: FontFamilies.poppins,
          fontWeight: FontWeights.semibold,
          fontSize: { xs: '1.625rem', md: '2.5rem' },
          lineHeight: { xs: '4.375rem', md: '4.375rem' },
          textAlign: 'center',
          mb: { xs: 1, md: 0 },
        }}
      >
        Why choose us?
      </Typography>

      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 10.5 },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mt: '4rem',
        }}
        textAlign="center"
      >
        <Stack
          gap={{ xs: 2, md: 3 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '446px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '4rem',
              height: '4rem',
              bgcolor: Colors.primaryBlue,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px 0px #00000040',
              mt: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <img src={CameraIcon} />
          </Box>
          <Stack
            gap={2}
            sx={{
              mt: 0,
              mx: { xs: '1.5rem', md: '2rem' },
              mb: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.563rem',
                color: Colors.black,
              }}
            >
              Keep memories from the trip
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Keeping your travel photos within your trip-planning app is
              incredibly practical.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          gap={{ xs: 2, md: 3 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '446px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '4rem',
              height: '4rem',
              bgcolor: Colors.primaryBlue,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px 0px #00000040',
              mt: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <img src={LocationIcon} />
          </Box>
          <Stack
            gap={2}
            sx={{
              mt: 0,
              mx: { xs: '1.5rem', md: '2rem' },
              mb: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.563rem',
                color: Colors.black,
              }}
            >
              Add places you want to visit
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Our user-friendly tools help you plan and organize your packing
              with ease.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          gap={{ xs: 2, md: 3 }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '446px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '4rem',
              height: '4rem',
              bgcolor: Colors.primaryBlue,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
              boxShadow: '0px 4px 10px 0px #00000040',
              mt: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <img src={FoldersIcon} />
          </Box>
          <Stack
            gap={2}
            sx={{
              mt: 0,
              mx: { xs: '1.5rem', md: '2rem' },
              mb: { xs: '1.5rem', md: '2rem' },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.563rem',
                color: Colors.black,
              }}
            >
              Centralize all your documents
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.text.secondary,
                lineHeight: '1.875rem',
              }}
            >
              Simplify Your Life by Bringing Together All Your Essential
              Documents and Files in a Single, Easily Accessible Location.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Advantages;
