import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Box } from '@mui/material';

import Advantages from '@features/landingpage/components/Advantages';
import Features from '@features/landingpage/components/Features';
import Footer from '@features/landingpage/components/Footer';
import Header from '@features/landingpage/components/Header';
import Hero from '@features/landingpage/components/Hero';
import PlanNextTrip from '@features/landingpage/components/PlanNextTrip';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      component={motion.div}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {children}
    </Box>
  );
};

export default function LandingPage() {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box
        component={motion.div}
        sx={{
          maxWidth: '1920px',
          mx: 'auto',
        }}
      >
        <Header />
        <Section>
          <Hero />
        </Section>
        <Section>
          <Features />
        </Section>
        <Section>
          <Advantages />
        </Section>
      </Box>
      <Section>
        <PlanNextTrip />
      </Section>
      <Section>
        <Footer />
      </Section>
    </Box>
  );
}
