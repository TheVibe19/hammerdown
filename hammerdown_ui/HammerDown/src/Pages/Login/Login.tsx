import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { User } from '../UserProfile/models/User';
import { Link } from 'react-router-dom';
type Props = {};

const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username,
        password,
      }, { withCredentials: true });

      if (response.status === 200) {
        const user = new User(response.data.data.id, response.data.data.roles, response.data.data.email, response.data.data.phone, response.data.data.firstName, response.data.data.lastName);
        let user1 = response.data.data?.id;
        console.log("login Pgae",user1);
        console.log('Login successful:', user);
        navigate('/profile', { state: { user } });
      } else {
        console.error('Login failed');
        // Handle login failure
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      // Handle error
    }
  };

  return (
    <Container maxWidth="sm">
      <br />
      <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
        Login
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleLogin}>
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
          type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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