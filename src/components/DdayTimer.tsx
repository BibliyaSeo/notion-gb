import {View, Text} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';

export default function DdayTimer() {
  const travelDay: any = new Date('2023-01-24');
  const today: any = new Date();

  const day = travelDay - today;
  const dDay = Math.floor(day / (1000 * 60 * 60 * 24)) + 1;

  const dDayText =
    dDay > 0
      ? `여행 ${dDay}일 전`
      : dDay === 0
      ? '여행 당일'
      : dDay < 0
      ? '여행 중'
      : 'Yeah';

  return (
    <View className="py-4 mb-2 flex items-center">
      <Text style={fontSytles.bold} className="text-pink-800 text-lg">
        Osaka
      </Text>
      <Text style={fontSytles.regular} className="text-pink-800">
        {dDayText}
      </Text>
    </View>
  );
}
