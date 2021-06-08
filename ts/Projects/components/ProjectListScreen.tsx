import * as React from 'react';
import { ScreenWithPadding } from '../../Common/components/ScreenWithPadding';
import { FlatList } from 'react-native';
import { ProjectCard } from './ProjectCard';

export function ProjectListScreen() {
  const dummyData = [
    {
      name: 'Project 1',
      id: '1',
      client: null,
      dateDue: '14.1.2022',
    },
    {
      name: 'Project 2',
      id: '2',
      client: 'OMG',
      dateDue: '14.1.2022',
    },
    {
      name: 'Project 3',
      id: '3',
      client: 'You',
      dateDue: '14.1.2022',
    },
  ];
  return (
    <ScreenWithPadding>
      <FlatList data={dummyData} renderItem={({ item }) => <ProjectCard project={item} />} />
    </ScreenWithPadding>
  );
}
