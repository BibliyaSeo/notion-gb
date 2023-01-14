import {View, Text} from 'react-native';
import React from 'react';

interface ImageTextProps {
  text: string;
}

export default function ImageText({text}: ImageTextProps) {
  return (
    <View className="border-l-2 border-gray-700">
      <Text className="pl-2 text-gray-800">{text}</Text>
    </View>
  );
}
