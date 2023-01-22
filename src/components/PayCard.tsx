import React from 'react';
import {Text, View} from 'react-native';
import {fontSytles} from '../styles/fontStyles';
import {dayColors, typeColors} from '../utils/colors';

export default function PayCard({list, date, day, memo, type, won, yen}: any) {
  return (
    <View className="border-0.5 px-5 py-3 rounded-xl mb-4 ">
      <View className="flex flex-row justify-between mb-1 items-center">
        <Text className="text-[16px]" style={fontSytles.bold}>
          {list}
        </Text>
        <View className={`px-2 py-0.5 ${typeColors(type)} rounded-md`}>
          <Text style={fontSytles.regular}>{type}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between mb-1">
        <Text style={fontSytles.regular}>{date}</Text>
        <View className={`px-2 py-0.5 ${dayColors(day)} rounded-md`}>
          <Text style={fontSytles.regular}>{day}</Text>
        </View>
      </View>

      <Text style={fontSytles.regular} className="mb-1">
        {memo}
      </Text>

      <View className="flex items-end">
        {won !== 0 && (
          <Text style={fontSytles.bold}>
            {won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </Text>
        )}
        {yen !== 0 && (
          <Text style={fontSytles.bold}>
            {yen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}엔
          </Text>
        )}
      </View>
    </View>
  );
}
