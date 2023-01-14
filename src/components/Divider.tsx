import {View, Text} from 'react-native';
import React from 'react';

export default function Divider() {
  return (
    <View className="w-full flex-row py-2 border-y-0.5 border-gray-400">
      <View className="h-6 w-1/4 bg-pink-50" />
      <View className="h-6 w-1/4 bg-purple-50" />
      <View className="h-6 w-1/4 bg-yellow-50" />
      <View className="h-6 w-1/4 bg-orange-50" />
    </View>
  );
}
