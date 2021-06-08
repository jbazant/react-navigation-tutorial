import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { LoginScreen } from './ts/Login/components/LoginScreen';
import { ProjectListScreen } from './ts/Projects/components/ProjectListScreen';
import { ProfileScreen } from './ts/Profile/components/ProfileScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="light" />
        <ProfileScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
