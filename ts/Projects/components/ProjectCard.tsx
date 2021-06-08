import * as React from 'react';
import { ScreenWithPadding } from '../../Common/components/ScreenWithPadding';
import { FlatList } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements';

interface Props {
  project: {
    name: string;
    id: string;
    client: string | null;
    dateDue: string | null;
  };
}
export function ProjectCard({ project: { name, id, client, dateDue } }: Props) {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <ListItem>
        <Icon name="info" type="entypo" color="#aaa" />
        <ListItem.Content>
          <ListItem.Title>{id}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Icon name="user" type="entypo" color="#aaa" />
        <ListItem.Content>
          <ListItem.Title>{client || 'Not set'}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem>
        <Icon name="calendar" type="entypo" color="#aaa" />
        <ListItem.Content>
          <ListItem.Title>{dateDue || 'Not set'}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Card>
  );
}
