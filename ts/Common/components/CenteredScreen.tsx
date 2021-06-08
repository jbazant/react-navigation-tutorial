import { screenStyles } from '../styles/screen';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export function CenteredScreen({ children }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={screenStyles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={screenStyles.centeredScreen}>{children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
