import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from './ts/CommonContext/UserContext';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './ts/Common/components/AppStack';

const queryClient = new QueryClient();

export default function App() {
  const [user, setUser] = useState({});

  const userContextValue = { user, setUser };
  return (
    <NavigationContainer>
      <UserContext.Provider value={userContextValue}>
        <SafeAreaProvider>
          <ThemeProvider>
            <StatusBar style="light" />
            <QueryClientProvider client={queryClient}>
              <AppStack />
            </QueryClientProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
