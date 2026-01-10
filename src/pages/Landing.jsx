import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Container, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import { Footer } from './Footer.jsx';
import { 
  Shield, 
  FileText, 
  MapPin, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Building2
} from 'lucide-react';

export default function Landing() {

  const features = [
    { icon: FileText, title: 'Easy Issue Reporting', description: 'Report civic issues like potholes, garbage, streetlights with photos and location.' },
    { icon: MapPin, title: 'GPS Location', description: 'Automatic location detection with map integration for accurate issue placement.' },
    { icon: Clock, title: 'Real-time Tracking', description: 'Track your complaint status from submission to resolution in real-time.' },
    { icon: BarChart3, title: 'Transparency Dashboard', description: 'View department performance, resolution rates, and area-wise statistics.' },
  ];

  const stats = [
    { value: '12,847', label: 'Issues Reported' },
    { value: '11,234', label: 'Issues Resolved' },
    { value: '87%', label: 'Resolution Rate' },
    { value: '4.2 Days', label: 'Avg. Resolution Time' },
  ];

  const roles = [
    { 
      title: 'Citizens', 
      desc: 'Report issues, track status, provide feedback on resolved complaints.',
      icon: Users,
      features: ['Report new issues', 'Track complaint status', 'View resolution timeline', 'Rate service quality']
    },
    { 
      title: 'Department Officers', 
      desc: 'Manage assigned issues, update status, add resolution notes.',
      icon: Building2,
      features: ['View assigned issues', 'Update issue status', 'Add resolution notes', 'Manage workload']
    },
    { 
      title: 'Administrators', 
      desc: 'Monitor performance, assign issues, manage departments and users.',
      icon: Shield,
      features: ['Analytics dashboard', 'Assign issues', 'Manage departments', 'Generate reports']
    },
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>

      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 50%, #00bcd4 100%)', 
        color: 'white', 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center' 
      }}>
        <Box sx={{ mb: 2, display: 'inline-flex', alignItems: 'center', px: 2, py: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2, fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
          <Shield size={18} style={{ marginRight: 6 }} />
          A Government of India Initiative
        </Box>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, my: 2, fontFamily: 'Montserrat, sans-serif', fontSize: { xs: '2rem', md: '3rem' } }}>
            CivicEye
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.25rem' } }}>
            Smart Public Issue Reporting & Resolution System
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mt: 2 }}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  padding: '10px 28px',
                  transition: '0.3s',
                  background: 'linear-gradient(135deg, #00bcd4, #1976d2)',
                  boxShadow: '0 0 12px rgba(0,188,212,0.6)',
                  '&:hover': {
                    transform: 'scale(1.06)',
                    boxShadow: '0 0 18px rgba(0,188,212,0.9)',
                    background: 'linear-gradient(135deg, #1976d2, #00bcd4)',
                  },
                }}
              >
                Report an Issue
              </Button>
            </Link>

            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                  padding: '10px 28px',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.06)',
                    background: 'rgba(255,255,255,0.15)',
                    boxShadow: '0 0 15px rgba(255,255,255,0.5)',
                  },
                }}
              >
                Login to Dashboard
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Stats Section */}
      <Container sx={{ my: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {stats.map((stat, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <motion.div initial="hidden" animate="visible" variants={scaleIn} transition={{ delay: idx * 0.15, duration: 0.5 }}>
                <Card sx={{ textAlign: 'center', py: 3, transition: '0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 700, 
                      fontFamily: 'Montserrat, sans-serif',
                      background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)', 
                      WebkitBackgroundClip: 'text', 
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary', mt: 1 }}>{stat.label}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container sx={{ my: { xs: 6, md: 8 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 4, fontFamily: 'Montserrat, sans-serif' }}>How CivicEye Works</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {features.map((feature, idx) => (
            <Grid item xs={12} md={3} key={idx}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: idx * 0.15, duration: 0.5 }}>
                <Card sx={{ p: 2, height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 48, height: 48, background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)', borderRadius: 1, mb: 2 }}>
                      <feature.icon size={24} color="white" />
                    </Box>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', mb: 1 }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary' }}>{feature.description}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Roles Section */}
      <Container sx={{ my: { xs: 6, md: 8 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 4, fontFamily: 'Montserrat, sans-serif' }}>For Everyone</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {roles.map((role, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.15, duration: 0.5 }}>
                <Card sx={{ p: 2, height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 48, height: 48, background: 'linear-gradient(135deg, #1976d2 0%, #00bcd4 100%)', borderRadius: 1, mb: 2 }}>
                      <role.icon size={24} color="white" />
                    </Box>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif', mb: 1 }}>{role.title}</Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', color: 'text.secondary', mb: 1 }}>{role.desc}</Typography>
                    <List dense>
                      {role.features.map((feat, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <CheckCircle size={16} color="green"/>
                          </ListItemIcon>
                          <ListItemText primary={feat} sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 50%, #00bcd4 100%)', color: 'white', py: { xs: 8, md: 10 }, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Montserrat, sans-serif', fontSize: { xs: '1.5rem', md: '2rem' } }}>Ready to Make a Difference?</Typography>
        <Typography sx={{ mb: 4, fontSize: { xs: '0.9rem', md: '1rem' } }}>Join thousands of citizens in building better cities. Report issues, track progress, and hold authorities accountable.</Typography>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button 
            variant="contained" 
            endIcon={<ArrowRight />}
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              padding: '10px 28px',
              transition: '0.3s',
              background: 'linear-gradient(135deg, #00bcd4, #1976d2)',
              boxShadow: '0 0 12px rgba(0,188,212,0.6)',
              '&:hover': { transform: 'scale(1.06)', boxShadow: '0 0 20px rgba(0,188,212,0.9)', background: 'linear-gradient(135deg, #1976d2, #00bcd4)' }
            }}
          >
            Get Started Now
          </Button>
        </Link>
      </Box>

      {/* Footer */}
      <Footer />

    </Box>
  );
}
