import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {IPlaceList} from '../utils/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {dayColors, regionColors} from '../utils/colors';
import {fontSytles} from '../styles/fontStyles';

export interface IPlaceCard extends IPlaceList {
  id: number;
}

export default function PlaceCard({
  id,
  name,
  region,
  description,
  worktime,
  googleMap,
  image,
  day,
  pass,
  memo,
}: IPlaceCard) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="rounded-lg bg-white mx-2"
      onPress={() =>
        navigation.navigate('PlaceDetail', {
          id,
          name,
          region,
          description,
          worktime,
          googleMap,
          image,
          day,
          pass,
          memo,
        })
      }>
      <Image source={image} className="h-36 w-52 rounded-t-lg" />
      <View className="py-2">
        <Text className="px-2 pb-2 text-gray-700" style={fontSytles.bold}>
          {name}
        </Text>
        <View className="flex-row">
          <View
            className={`px-2 py-1 mb-2 ml-2 ${regionColors(
              region,
            )} rounded-md flex-row justify-center`}>
            <Text style={fontSytles.regular} className="text-gray-700">
              {region}
            </Text>
          </View>
          <View
            className={`px-2 py-1 mb-2 mx-2 rounded-md flex-row justify-center ${dayColors(
              day,
            )} `}>
            <Text style={fontSytles.regular} className="text-gray-700">
              {day}
            </Text>
          </View>
        </View>
        <View className="px-2 py-1 mb-2 mx-2 bg-gray-200 rounded-md w-20 flex-row justify-center">
          <Text style={fontSytles.regular} className="text-gray-700">
            {pass}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
