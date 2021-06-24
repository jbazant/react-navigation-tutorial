import React, { useCallback, useContext } from 'react';
import { Avatar, Button, Card } from 'react-native-elements';
import { CenteredScreen } from '../../Common/components/CenteredScreen';
import { userAvatarStyles } from '../styles/userAvatar';
import { UserContext } from '../../CommonContext/UserContext';

export function ProfileScreen() {
  const { setUser } = useContext(UserContext);
  const logoutPressCallback = useCallback(() => {
    setUser({});
  }, [setUser]);
  return (
    <CenteredScreen>
      <Card>
        <Avatar rounded title="AA" size="large" containerStyle={userAvatarStyles.container} />
        <Card.Divider />
        <Button title="Logout" onPress={logoutPressCallback} />
      </Card>
    </CenteredScreen>
  );
}
