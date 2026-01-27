import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Grid, Card, Typography, Button, Input } from '@mui/material';
import { Shield, Loader2, User, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('citizen');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const roleConfig = [
    { value: 'citizen', label: 'Citizen', icon: User },
    { value: 'officer', label: 'Officer', icon: Building2 },
    { value: 'admin', label: 'Admin', icon: ShieldCheck },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo login
    setTimeout(() => {
      alert(`Logged in as ${role} with email: ${email}`);
      setIsLoading(false);
      switch (role) {
        case 'citizen': navigate('/citizen'); break;
        case 'officer': navigate('/officer'); break;
        case 'admin': navigate('/admin'); break;
        default: navigate('/'); break;
      }
    }, 1500);
  };

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', fontFamily: 'Inter, sans-serif' }}>
      <Grid container sx={{ minHeight: '100vh' }}>
        {/* Left - Hero */}
        <Grid
          item xs={12} lg={6}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 50%, #00bcd4 100%)',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            p: 8,
          }}
        >
          <Box sx={{ maxWidth: 400, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={36} color="white" />
              </Box>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>CivicEye</Typography>
            <Typography sx={{ mt: 2, fontSize: '1.125rem' }}>Smart Public Issue Reporting System</Typography>
            <Typography sx={{ mt: 4, color: 'rgba(255,255,255,0.7)' }}>
              Sign in to access your dashboard and manage civic issues efficiently.
            </Typography>
          </Box>
        </Grid>

        {/* Right - Form */}
        <Grid
          item xs={12} lg={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Card sx={{ maxWidth: 400, width: '100%', p: 3, borderRadius: 3, boxShadow: 6 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Box sx={{ width: 64, height: 64, bgcolor: 'primary.main', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield size={28} color="#fff" />
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Montserrat, sans-serif' }}>Welcome Back</Typography>
                <Typography sx={{ color: 'text.secondary' }}>Sign in to your CivicEye account</Typography>
              </Box>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Role Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  {roleConfig.map((r) => (
                    <Button
                      key={r.value}
                      variant={role === r.value ? 'contained' : 'outlined'}
                      startIcon={<r.icon size={16} />}
                      onClick={() => setRole(r.value)}
                      sx={{
                        flex: 1,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        marginRight: r.value !== 'admin' ? 1 : 0,
                        background: role === r.value ? 'linear-gradient(135deg, #1976d2, #00bcd4)' : 'white',
                        color: role === r.value ? 'white' : 'black',
                        '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
                      }}
                    >
                      {r.label}
                    </Button>
                  ))}
                </Box>

                {/* Email */}
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ fontFamily: 'Inter, sans-serif' }}
                />

                {/* Password */}
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ fontFamily: 'Inter, sans-serif' }}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #1976d2, #00bcd4)',
                    '&:hover': { transform: 'scale(1.05)', boxShadow: '0 0 15px rgba(0,188,212,0.7)' },
                  }}
                >
                  {isLoading ? <Loader2 className="animate-spin mr-2" /> : 'Sign In'}
                </Button>

                {/* Register link */}
                <Typography sx={{ textAlign: 'center', fontSize: '0.875rem' }}>
                  Don't have an account?{' '}
                  <Link to="/register" style={{ color: '#1976d2', fontWeight: 600, textDecoration: 'underline' }}>
                    Register here
                  </Link>
                </Typography>
              </form>

              {/* Demo Info */}
              <Box sx={{ mt: 4, p: 2, bgcolor: 'secondary.light', borderRadius: 2, fontSize: '0.875rem' }}>
                <Typography sx={{ fontWeight: 600 }}>Demo Access</Typography>
                <Typography sx={{ mt: 1, color: 'text.secondary' }}>
                  Use any email and password to login. Select your role above to access different dashboards.
                </Typography>
              </Box>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
