import * as React from 'react';
import { Button, Card, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CenteredScreen } from '../../Common/components/CenteredScreen';
import { useCallback, useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { loginUser } from '../../Common/api';
import { UserContext } from '../../CommonContext/UserContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../Common/components/AppStack';

interface ILoginScreen {
  navigation: StackNavigationProp<AppStackParamList, 'Login'>;
}
export function LoginScreen({ navigation }: ILoginScreen) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const loginMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      setUser({ userName: 'Franta' });
    },
  });
  const onLoginCallback = useCallback(() => {
    loginMutation.mutate({ userName: username, password: password });
  }, [username, password]);

  const userOrPasswordIsEmpty = !username || !password;

  return (
    <CenteredScreen>
      <Card>
        <Card.Title>Start with signing in to your Memsource account</Card.Title>
        <Card.Divider />
        <Input
          placeholder="Joe.Doe"
          label="Username"
          autoCapitalize={'none'}
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={setUsername}
        />
        <Input
          label="Password"
          autoCapitalize={'none'}
          placeholder="Your Password"
          leftIcon={<Icon name="lock" size={24} color="black" />}
          onChangeText={setPassword}
        />
        <Card.Divider />
        <Button
          title="Sign in"
          onPress={onLoginCallback}
          disabled={userOrPasswordIsEmpty}
          loading={loginMutation.isLoading}
        />
      </Card>
    </CenteredScreen>
  );
}
