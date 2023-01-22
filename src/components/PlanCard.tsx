import {View, Text, Image} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';
import {dayColors} from '../utils/colors';

export default function PlanCard({day, date, title, memo}: any) {
  return (
    <View className="border-0.5 px-5 py-3 rounded-xl mb-4">
      <Text className={`text-xl mb-2`} style={fontSytles.bold}>
        <Text className={`${dayColors(day)}`}>{day}</Text>
      </Text>
      <View className="flex flex-row space-x-5 mb-2">
        <Text style={fontSytles.bold}>{title}</Text>
        <Text style={fontSytles.regular}>{date}</Text>
      </View>
      <Text style={fontSytles.regular}>{memo}</Text>
    </View>
  );
}
