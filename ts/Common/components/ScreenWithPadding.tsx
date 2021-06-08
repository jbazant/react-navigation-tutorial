import { screenStyles } from '../styles/screen';
import * as React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

interface Props {
  children: React.ReactNode;
}

export function ScreenWithPadding({ children }: Props) {
  return <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={screenStyles.container}
  >
    <View style={screenStyles.withPadding}>{children}</View>
  </KeyboardAvoidingView>;
}