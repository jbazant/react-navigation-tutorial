import { screenStyles } from '../styles/screen';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export function CenteredScreen({ children }: Props) {
  return <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={screenStyles.container}
  >
  <View style={screenStyles.centeredScreen}>{children}</View>
  </KeyboardAvoidingView>;
}
