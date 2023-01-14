import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ImageCard({photo}: any) {
  return (
    <View className="my-2">
      <Image source={photo} className="w-screen h-56" />
    </View>
  );
}
