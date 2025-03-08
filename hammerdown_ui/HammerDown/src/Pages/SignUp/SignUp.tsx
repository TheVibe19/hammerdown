import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};


const SignUp:React.FC<Props> = () => {

   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const handleSignUp = async (event: React.FormEvent) => {
       event.preventDefault();

  try {
   const response = await axios.post('http://localhost:8080/api/auth/signup', {
    username,
    email,
    password,
   }, { withCredentials: true });
   
   if(response.status === 200){
    console.log('Sign Up successful:', response.data);
    navigate('/login');
   }
   else {
      console.error('Sign Up failed');
    }
  }
  catch(error){
    console.error('An error occurred during Sign Up:', error);
  }
}

  return (
    <Container maxWidth="sm">
      <br />
      <Typography variant="h4" component="h1" gutterBottom textAlign={'center'}>
        Sign Up
      </Typography>
      <form  autoComplete="off" onSubmit={handleSignUp}>
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
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
         <TextField
          label="Contact Number"
          type="number"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
         <TextField
          label="Address"
          type="text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body1" style={{ marginTop: '1rem' }}>
        Already have an account? <Link to="/login">Login</Link>
       </Typography>
    </Container>
    );
}
export default SignUp;