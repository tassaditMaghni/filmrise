import { ExitToApp } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
    
  },
  favoriteMovies = []
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant='h4' gutterBottom>My Profile</Typography>
        <Button color = "inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? <Typography variant='h5'>Add favorites or watchlist some movies to see them here</Typography> : 
      <Box>
        FAVORITE MOVIES
      </Box>}
    </Box>
  )
}

export default Profile;