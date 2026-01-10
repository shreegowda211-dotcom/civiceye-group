import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Typography);

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'linear-gradient(135deg, #1565c0 0%, #00acc1 50%, #00bcd4 100%)', // Slightly darker blue start
        color: '#fefefe',
        py: { xs: 8, md: 12 },
        fontFamily: 'Inter, sans-serif',
        fontSize: { xs: '0.875rem', md: '0.9rem' },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          
          {/* Branding */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  bgcolor: 'white',
                  borderRadius: 1,
                }}
              >
                <Shield size={18} color="#1565c0" />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif', fontSize: { xs: '1rem', md: '1.125rem' }, color: '#fefefe' }}
              >
                CivicEye
              </Typography>
            </Box>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
              Smart Public Issue Reporting & Resolution System for transparent urban governance.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#fefefe' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {['Report Issue', 'Track Status', 'Transparency Dashboard', 'Contact Us'].map((link) => (
                <MotionLink
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: { xs: '0.85rem', md: '0.875rem' },
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#ffeb3b' } // subtle yellow hover
                  }}
                >
                  {link}
                </MotionLink>
              ))}
            </Box>
          </Grid>

          {/* Departments */}
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#fefefe' }}>
              Departments
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {['Roads & Infrastructure', 'Sanitation', 'Electrical', 'Water Supply'].map((dept) => (
                <Typography
                  key={dept}
                  component="span"
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: { xs: '0.85rem', md: '0.875rem' },
                  }}
                >
                  {dept}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, fontFamily: 'Montserrat, sans-serif', color: '#fefefe' }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {[
                'Helpline: 1800-XXX-XXXX',
                'Email: support@civiceye.gov',
                'Municipal Corporation',
                'Mon-Sat: 9:00 AM - 6:00 PM',
              ].map((c) => (
                <Typography
                  key={c}
                  component="span"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: { xs: '0.85rem', md: '0.875rem' },
                  }}
                >
                  {c}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            borderTop: '1px solid rgba(255,255,255,0.3)',
            pt: 3,
            textAlign: 'center',
            fontSize: { xs: '0.75rem', md: '0.825rem' },
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.85)' }}>
            © 2024 CivicEye. A Government of India Initiative. All rights reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.5 }}>
            Final Year Engineering Project - Smart India Hackathon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
