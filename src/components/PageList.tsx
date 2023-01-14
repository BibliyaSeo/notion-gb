import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function PageList() {
  const navigation = useNavigation();

  return (
    <View className="py-3 space-y-1 px-4">
      <View className="flex-row space-x-2">
        <MaterialIcons name={'loyalty'} size={20} color={'#bb3358'} />
        <TouchableOpacity onPress={() => navigation.navigate('Plan')}>
          <Text style={fontSytles.regular} className="text-gray-800">
            Plan
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row space-x-2">
        <MaterialIcons name={'local-activity'} size={20} color={'#bb3358'} />
        <TouchableOpacity onPress={() => navigation.navigate('Place')}>
          <Text style={fontSytles.regular} className="text-gray-800">
            Place List
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row space-x-2">
        <MaterialIcons name={'bookmark'} size={20} color={'#bb3358'} />
        <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
          <Text style={fontSytles.regular} className="text-gray-800">
            Reservation
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row space-x-2">
        <MaterialIcons name={'local-atm'} size={20} color={'#bb3358'} />
        <TouchableOpacity>
          <Text style={fontSytles.regular} className="text-gray-800">
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
