import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProjectListScreen } from '../../Projects/components/ProjectListScreen';
import { ProfileScreen } from '../../Profile/components/ProfileScreen';

const Tab = createBottomTabNavigator();
const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Projects" component={ProjectListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
