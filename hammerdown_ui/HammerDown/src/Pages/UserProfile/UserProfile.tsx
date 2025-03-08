import React, { useState } from 'react';
import { Container, Typography, Grid, Avatar, Paper } from '@material-ui/core';
import { User } from './models/User';

import { useEffect } from 'react';

const UserProfile: React.FC = (props) => {
    const [avatar, setAvatar] = useState<string>('profile-pic-url');
    const [user, setUser] = useState(new User("", [], "", "", "", ""));


    const fetchUserDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/user', {
                headers: {
                    'HammerdownJwtAuth': "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmMiLCJpYXQiOjE3NDE0NTg5MjIsImV4cCI6MTc0MTQ2NDkyMn0.c6cx4UxHoClSk4Xxmk3vUoM9YxoGxc8ogqaDhptBf2A"
                }
            });
            setUser(response.data);
            console.log('User details:', response);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };



  if (!user) {
    return <Typography variant="h6" style={{ textAlign: 'center' }}>No user data available</Typography>;
  }

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setAvatar(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        User Profile
      </Typography>
      <Grid container justifyContent="center">
        <Grid item>
          <Avatar alt="Profile" src={avatar} style={{ width: 100, height: 100, marginBottom: '1rem' }} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <input
            accept="image/*"

            id="avatar-upload"
            type="file"
            onChange={handleAvatarChange}
          />
        
        </Grid>
      </Grid>
      <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6">Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{user.firstName} {user.lastName}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6">Email</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{user.email}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6">Funds Available</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">300 rs</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6">Contact</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{user.phone}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6">Address</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">Mumbai</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <button onClick={fetchUserDetails}>Fetch User Details</button>
    </Container>
  );
};

export default UserProfile;