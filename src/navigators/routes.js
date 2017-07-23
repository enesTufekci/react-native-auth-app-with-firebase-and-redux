import LoginComponent from 'src/components/auth/login/';
import RegisterComponent from 'src/components/auth/register/';
import HomeComponent from 'src/components/main/home/';

export default routes = {
  Register: { 
    screen: RegisterComponent,
    navigationOptions: () => ({
      title: 'Register',
    }),
  },
  Login: { 
    screen: LoginComponent,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  Home: { 
    screen: HomeComponent,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
};
