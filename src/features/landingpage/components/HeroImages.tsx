import { Box, Stack } from '@mui/material';

import { useBreakpoints } from '@hooks/useBreakpoints';

import Beach from '../assets/desktop/beach.png';
import City from '../assets/desktop/city.png';
import DesktopTrailer from '../assets/desktop/desktop-trailer.png';

export default function HeroImages() {
  const { md, xl } = useBreakpoints();

  return (
    <Stack sx={{}}>
      {md && (
        <Stack
          flex={1}
          gap={3}
          direction="row"
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            maxWidth: { xs: '100%', md: '28%', xl: '45%', lg: '25%' },
            maxHeight: { xs: 'auto', md: 'calc(100vh - 150px)' },
          }}
        >
          <Stack
            gap={3}
            sx={{
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              component="img"
              src={DesktopTrailer}
              alt="Camping van"
              borderRadius={10}
              width="100%"
            />
            <Box
              component="img"
              src={Beach}
              alt="Palm tree on a beach"
              borderRadius={10}
              width="100%"
            />
          </Stack>

          {xl && (
            <Stack
              sx={{
                alignItems: {
                  xs: 'center',
                  md: 'flex-start',
                },
                maxWidth: '364px',
              }}
            >
              <Box
                component="img"
                src={City}
                alt="Sunset in Seattle city"
                sx={{
                  width: '100%',
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
