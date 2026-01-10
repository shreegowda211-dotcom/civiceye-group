import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Avatar, Menu, MenuItem, Badge, Box, Typography, Divider } from '@mui/material';
import { Shield, User, LogOut, Bell } from 'lucide-react';

export function Header({ user, isAuthenticated, logout }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    logout();
    navigate('/');
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getDashboardPath = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'citizen':
        return '/citizen';
      case 'officer':
        return '/officer';
      case 'admin':
        return '/admin';
      default:
        return '/';
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          height: 64,
        }}
      >
        {/* Logo */}
        <Link to={isAuthenticated ? getDashboardPath() : '/'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield color="#fff" size={20} />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'primary.main', fontSize: 18 }}>CivicEye</Typography>
            <Typography sx={{ fontSize: 10, color: 'text.secondary' }}>Smart Issue Reporting</Typography>
          </Box>
        </Link>

        {/* Auth buttons or User menu */}
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Notifications */}
            <Button variant="text" sx={{ position: 'relative', minWidth: 'auto', px: 1 }}>
              <Bell size={20} />
              <Badge
                badgeContent={3}
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    minWidth: 16,
                    height: 16,
                    fontSize: 10,
                    top: -4,
                    right: -4,
                  },
                }}
              />
            </Button>

            {/* User dropdown */}
            <Box>
              <Button onClick={handleMenu} sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>
                  {user?.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </Avatar>
                <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'left' }}>
                  <Typography sx={{ fontSize: 12, fontWeight: 600 }}>{user?.name}</Typography>
                  <Typography sx={{ fontSize: 10, color: 'text.secondary', textTransform: 'capitalize' }}>{user?.role}</Typography>
                </Box>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ sx: { width: 220 } }}
              >
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography sx={{ fontSize: 12, fontWeight: 600 }}>{user?.name}</Typography>
                  <Typography sx={{ fontSize: 10, color: 'text.secondary' }}>{user?.email}</Typography>
                </Box>
                <Divider />
                <MenuItem onClick={() => { navigate(getDashboardPath()); handleClose(); }}>
                  <User size={16} style={{ marginRight: 8 }} />
                  Dashboard
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                  <LogOut size={16} style={{ marginRight: 8 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{ fontFamily: 'Inter, sans-serif' }}>Login</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #1976d2, #00bcd4)', color: 'white' }}>Register</Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}
