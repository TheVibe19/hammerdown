import axios from 'axios';
import { User } from '../Pages/UserProfile/models/User';

export const handleLogin = async (username: string, password: string, navigate: any): Promise<number> => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/signin', {
      username,
      password,
    }, { withCredentials: true });

    if (response.status === 200) {
      const user = new User(response.data.data.id, response.data.data.roles, response.data.data.email, response.data.data.phone, response.data.data.firstName, response.data.data.lastName);
      let user1 = response.data.data?.id;
      console.log("login Page", user1);
      console.log('Login successful:', user);
      navigate('/profile', { state: { user } });
    } else {
      console.error('Login failed');
    }
    return response.status;
  } catch (error) {
    console.error('An error occurred during login:', error);
    return 500;
  }
};