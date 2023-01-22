import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fontSytles} from '../styles/fontStyles';
import {useNavigation} from '@react-navigation/native';

export default function Page({
  title,
  icon,
  navigate,
}: {
  title: string;
  icon: string;
  navigate: string;
}) {
  const navigation = useNavigation();
  return (
    <View className="flex-row space-x-2 mb-1">
      <MaterialIcons name={icon} size={20} color={'#bb3358'} />
      <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
        <Text style={fontSytles.regular} className="text-gray-800">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
