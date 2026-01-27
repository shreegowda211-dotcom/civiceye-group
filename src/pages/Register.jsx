import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Card, CardContent, Typography, TextField, Tabs, Tab } from '@mui/material';
import { Shield, User, Building2, ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Register() {
  const [role, setRole] = useState('citizen');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const roleConfig = [
    { value: 'citizen', label: 'Citizen', icon: <User />, desc: 'Report & track issues' },
    { value: 'officer', label: 'Officer', icon: <Building2 />, desc: 'Manage assigned issues' },
    { value: 'admin', label: 'Admin', icon: <ShieldCheck />, desc: 'Full system access' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Registered successfully!');
      navigate('/login');
    }, 1000);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Box sx={{ flex: 1, display: 'flex' }}>
        {/* Left side - branding */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            width: '50%',
            background: 'linear-gradient(135deg,#1976d2 0%,#00acc1 100%)',
            color: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 8,
            textAlign: 'center',
          }}
        >
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 4 }}>
            <Shield size={40} color="#fff" />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>Join CivicEye</Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>Be Part of Smart Governance</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            Register to report civic issues, track resolutions, and contribute to building better cities.
          </Typography>
        </Box>

        {/* Right side - form */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
          <Card sx={{ width: 400, p: 3 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Shield size={32} color="#1976d2" />
                  <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>Create Account</Typography>
                  <Typography variant="body2" color="text.secondary">Register for CivicEye platform</Typography>
                </Box>

                {/* Role Tabs */}
                <Tabs
                  value={role}
                  onChange={(e, val) => setRole(val)}
                  centered
                  sx={{ mb: 3 }}
                >
                  {roleConfig.map((r) => (
                    <Tab key={r.value} value={r.value} label={r.label} icon={r.icon} iconPosition="start" />
                  ))}
                </Tabs>
                <Typography variant="caption" display="block" textAlign="center" sx={{ mb: 2 }}>
                  {roleConfig.find(r => r.value === role)?.desc}
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <TextField
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <Button type="submit" variant="contained" disabled={isLoading} sx={{ py: 1.5 }}>
                    {isLoading ? <><Loader2 className="animate-spin" size={16} /> Creating...</> : 'Create Account'}
                  </Button>
                </form>

                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
                    Sign in
                  </Link>
                </Typography>
              </CardContent>
            </motion.div>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
