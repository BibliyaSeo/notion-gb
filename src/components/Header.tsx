import {View, Text} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';

export default function Header({first, title}: {first: string; title: string}) {
  return (
    <View className="py-2 flex items-center bg-white">
      <Text style={fontSytles.bold} className="text-xl text-gray-800">
        <Text className="text-pink-700">{first}</Text>
        {title}
      </Text>
    </View>
  );
}
