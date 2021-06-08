import React from 'react';
import { Avatar, Button, Card } from 'react-native-elements';
import { CenteredScreen } from '../../Common/components/CenteredScreen';
import { userAvatarStyles } from '../styles/userAvatar';

export function ProfileScreen() {
  return (
    <CenteredScreen>
      <Card>
        <Avatar rounded title="AA" size="large" containerStyle={userAvatarStyles.container}/>
        <Card.Divider />
        <Button title="Logout" />
      </Card>
    </CenteredScreen>
  );
}

ProfileScreen.navigationParams = () => ({
    title: 'My Profile',
})
