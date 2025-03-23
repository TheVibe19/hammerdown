import React, { useState } from 'react';
import { Button, TextField, Container, Typography, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Import visibility icons
import axiosClient from '../../utils/axiosClient';
import { User } from '../UserProfile/models/User';

type Props = {};

const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

   const handleLogin = async (username: string, password: string): Promise<number> => {
      try {
        const response = await axiosClient.post('auth/signin', { username, password });
        if (response.status === 200) {
          const user = new User(response.data.data.id, response.data.data.roles, response.data.data.email, response.data.data.phone, response.data.data.firstName, response.data.data.lastName);
          console.log('Login successful:', response.data);
          navigate('/profile', { state: { user } });
        }
        return response.status;
      } catch (error) {
        console.error('Login failed:', error);
        return 500;
      }
    };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response: number = await handleLogin(username, password);
    if (response !== 200) {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm">
      <br />
      <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
        Login
      </Typography>
      <Typography variant="body1" style={{ color: 'red' }}>
        {error}
      </Typography>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          label="User Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: '1rem' }}>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </Typography>
    </Container>
  );
};

export default Login;