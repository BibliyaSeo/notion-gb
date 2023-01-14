import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {fontSytles} from '../styles/fontStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {regionColors} from '../utils/colors';

export default function PlaceListDetailScreen() {
  const {
    params: {
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
    },
  } = useRoute<any>();

  return (
    <View className={`min-h-screen min-w-screen`}>
      <View className="py-2 px-2 flex-row justify-center items-center bg-white">
        {/* <TouchableOpacity>
          <MaterialIcons name="navigate-before" size={25} />
        </TouchableOpacity> */}
        <Text style={fontSytles.bold} className="text-lg text-gray-800">
          {name}
        </Text>
        {/* <TouchableOpacity>
          <MaterialIcons name="navigate-next" size={25} />
        </TouchableOpacity> */}
      </View>
      <ScrollView className="py-2 px-2 bg-white">
        <View>
          <Image source={image} className="w-full h-48" />
        </View>
        <View>
          <View className="py-2 mt-1 flex items-center">
            <View className="flex-row">
              <Text
                style={fontSytles.boldItalic}
                className={`px-2 py-1 ${regionColors(region)} text-gray-800`}>
                {region} / {day}
              </Text>
            </View>
            <View className="mt-1">
              <Text style={fontSytles.regular} className="text-gray-800 italic">
                {pass}
              </Text>
            </View>
            <View className="mt-1">
              <Text style={fontSytles.regular} className="text-gray-800 italic">
                운영시간: {worktime}
              </Text>
            </View>
          </View>
          <View className="w-full mt-2 border-t-0.5 border-gray-400"></View>
          <View className="my-4 px-2">
            <View className="flex-row space-x-2 items-center">
              <MaterialIcons
                name="local-attraction"
                size={18}
                color={'#353535'}
              />
              <Text style={fontSytles.regular} className="text-gray-800 mb-1">
                설명
              </Text>
            </View>

            <Text style={fontSytles.regular} className="text-gray-800">
              {description}
            </Text>
          </View>
          {memo !== '' && (
            <View className="px-2">
              <View className="flex-row space-x-2 items-center">
                <MaterialIcons
                  name="mode-comment"
                  size={18}
                  color={'#353535'}
                />
                <Text style={fontSytles.regular} className="text-gray-800 mb-1">
                  메모
                </Text>
              </View>

              <Text style={fontSytles.regular} className="text-gray-800">
                {memo}
              </Text>
            </View>
          )}
          <View className="flex-row items-center space-x-2 px-2 pt-4 pb-2">
            <MaterialIcons name="pin-drop" size={20} color={'#353535'} />
            <TouchableOpacity onPress={() => Linking.openURL(googleMap)}>
              <Text style={fontSytles.regular} className="text-gray-800">
                {name} Google Map
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
