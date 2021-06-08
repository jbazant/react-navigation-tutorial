import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { LoginScreen } from '../Login/components/LoginScreen';
import { ProjectListScreen } from '../Projects/components/ProjectListScreen';
import { ProfileScreen } from '../Profile/components/ProfileScreen';
import { createStackNavigator } from 'react-navigation-stack';

const ProjectStack = createStackNavigator(
  {
    ProjectList: ProjectListScreen,
  },
  {
    headerMode: 'float',
    mode: 'card',
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Projects: ProjectStack,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: {},
  }
);

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      App: AppNavigator,
    },
    {
      initialRouteName: 'Login',
    }
  )
);
