import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {pageList} from '../data/pageList';
import Page from './Page';

export default function PageList() {
  const navigation = useNavigation();

  return (
    <View className="py-3 space-y-1 px-4">
      <View className="py-3 space-y-1 px-4">
        {pageList.map((page: any, index: number) => (
          <Page
            key={index}
            title={page.title}
            icon={page.icon}
            navigate={page.navigate}
          />
        ))}
      </View>
    </View>
  );
}
