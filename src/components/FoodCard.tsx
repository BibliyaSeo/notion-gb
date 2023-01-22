import {View, Text, Image} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';

export default function FoodCard({photo, name, memo}: any) {
  return (
    <View className="mb-8">
      <View className="w-full">
        <Image source={photo} className="w-full h-32 rounded-lg" />
      </View>
      <View>
        <Text className="text-lg my-2" style={fontSytles.bold}>
          {name}
        </Text>
        <Text style={fontSytles.regular}>{memo}</Text>
      </View>
    </View>
  );
}
