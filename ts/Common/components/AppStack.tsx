import React, { useContext } from 'react';
import { LoginScreen } from '../../Login/components/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import { UserContext } from '../../CommonContext/UserContext';

export type AppStackParamList = {
  Login: undefined,
  MainTabs: undefined,
};
const AppStackNavigator = createStackNavigator<AppStackParamList>();
const AppStack = () => {
  const { user } = useContext(UserContext);
  const hasUser = !!user?.userName;
  console.warn(user);
  console.log(user);
  return (
    <AppStackNavigator.Navigator initialRouteName="Login">
      {!hasUser && <AppStackNavigator.Screen name="Login" component={LoginScreen} />}
      {hasUser && <AppStackNavigator.Screen name="MainTabs" component={MainTabs} />}
    </AppStackNavigator.Navigator>
  );
};

export default AppStack;
