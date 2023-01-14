import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ReservationCard({
  name,
  english,
  date,
  type,
  memo,
  reservationNumber,
  url,
  url2,
}: any) {
  return (
    <View className="mb-4">
      <View className="border-0.5 py-3 px-4 rounded-lg border-gray-400">
        <View className="flex-row">
          <Text style={fontSytles.bold} className="text-gray-900 bg-pink-100">
            {name}
          </Text>
        </View>

        <Text style={fontSytles.boldItalic} className="text-xs text-gray-800">
          {english}
        </Text>
        <Text style={fontSytles.bold} className="my-1 text-gray-800">
          {date}
        </Text>

        <Text style={fontSytles.regular} className="text-gray-800">
          예약 번호: {reservationNumber}
        </Text>
        <Text style={fontSytles.regular} className="mt-2 text-gray-800">
          {memo}
        </Text>

        {url !== '' && (
          <View className="flex-row items-center mb-1 mt-2">
            <MaterialIcons name="launch" size={16} />
            <TouchableOpacity>
              <Text className="text-gray-800">참고 확인하기</Text>
            </TouchableOpacity>
          </View>
        )}
        {url2 !== '' && (
          <View className="flex-row items-center mt-2 mb-1">
            <MaterialIcons name="launch" size={16} />
            <TouchableOpacity>
              <Text className="text-gray-800">예약 확인하기</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
