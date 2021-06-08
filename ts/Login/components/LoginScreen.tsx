import * as React from 'react';
import { Button, Card, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CenteredScreen } from '../../Common/components/CenteredScreen';

export function LoginScreen() {
  return (
    <CenteredScreen>
      <Card>
        <Card.Title>Start with signing in to your Memsource account</Card.Title>
        <Card.Divider/>
        <Input
          placeholder="Joe.Doe"
          label="Username"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
          label="Password"
          placeholder="Your Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
        />
        <Card.Divider/>
        <Button title="Sign in" loading disabled />
      </Card>
    </CenteredScreen>
  );
}
