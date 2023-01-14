import {View, Text, Image} from 'react-native';
import React from 'react';
import {fontSytles} from '../styles/fontStyles';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../components/Divider';
import {
  kobeList,
  kyotoList,
  osakaFirstList,
  osakaSecondList,
  osakaThirdList,
} from '../data/placeList';
import PlaceCard from '../components/PlaceCard';
import {IPlaceList} from '../utils/types';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function PlaceListScreen() {
  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="P" title="LACE LIST" />
      <ScrollView className="px-4 py-2 bg-white">
        <Divider />
        <View className="py-2">
          <View className="mb-2 px-2 bg-pink-50 w-1/2 flex-row items-center space-x-2">
            <MaterialIcons name="loyalty" size={18} color="#c00c9f" />
            <Text style={fontSytles.bold} className="text-gray-800">
              OSAKA / DAY 1
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {osakaFirstList?.map((osaka: IPlaceList, index) => (
              <PlaceCard
                key={`osaka_first_${index}`}
                id={index}
                name={osaka.name}
                region={osaka.region}
                description={osaka.description}
                worktime={osaka.worktime}
                googleMap={osaka.googleMap}
                image={osaka.image}
                day={osaka.day}
                pass={osaka.pass}
                memo={osaka.memo}
              />
            ))}
          </ScrollView>
        </View>
        <View className="py-2">
          <View className="mb-2 px-2 bg-purple-50 w-1/2 flex-row items-center space-x-2">
            <MaterialIcons name="loyalty" size={18} color="#750b8f" />
            <Text style={fontSytles.bold} className="text-gray-800">
              OSAKA / DAY 2
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {osakaSecondList?.map((osaka: IPlaceList, index) => (
              <PlaceCard
                key={`osaka_second_${index}`}
                id={index}
                name={osaka.name}
                region={osaka.region}
                description={osaka.description}
                worktime={osaka.worktime}
                googleMap={osaka.googleMap}
                image={osaka.image}
                day={osaka.day}
                pass={osaka.pass}
                memo={osaka.memo}
              />
            ))}
          </ScrollView>
        </View>
        <View className="py-2">
          <View className="mb-2 px-2 bg-blue-50 w-1/2 flex-row items-center space-x-2">
            <MaterialIcons name="loyalty" size={18} color="#0b3c87" />
            <Text style={fontSytles.bold} className="text-gray-800">
              OSAKA / DAY 3
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {osakaThirdList?.map((osaka: IPlaceList, index) => (
              <PlaceCard
                key={`osaka_third_${index}`}
                id={index}
                name={osaka.name}
                region={osaka.region}
                description={osaka.description}
                worktime={osaka.worktime}
                googleMap={osaka.googleMap}
                image={osaka.image}
                day={osaka.day}
                pass={osaka.pass}
                memo={osaka.memo}
              />
            ))}
          </ScrollView>
        </View>
        <View className="py-2">
          <View className="mb-2 px-2 bg-orange-50 w-1/2 flex-row items-center space-x-2">
            <MaterialIcons name="loyalty" size={18} color="#d2710a" />
            <Text style={fontSytles.bold} className="text-gray-800">
              KYOTO / DAY 4
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {kyotoList?.map((osaka: IPlaceList, index) => (
              <PlaceCard
                key={`kyoto_${index}`}
                id={index}
                name={osaka.name}
                region={osaka.region}
                description={osaka.description}
                worktime={osaka.worktime}
                googleMap={osaka.googleMap}
                image={osaka.image}
                day={osaka.day}
                pass={osaka.pass}
                memo={osaka.memo}
              />
            ))}
          </ScrollView>
        </View>
        <View className="py-2">
          <View className="mb-2 px-2 bg-green-50 w-1/2 flex-row items-center space-x-2">
            <MaterialIcons name="loyalty" size={18} color="#027007" />
            <Text style={fontSytles.bold} className="text-gray-800">
              KOBE / DAY 5
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {kobeList?.map((osaka: IPlaceList, index) => (
              <PlaceCard
                key={`kobe_${index}`}
                id={index}
                name={osaka.name}
                region={osaka.region}
                description={osaka.description}
                worktime={osaka.worktime}
                googleMap={osaka.googleMap}
                image={osaka.image}
                day={osaka.day}
                pass={osaka.pass}
                memo={osaka.memo}
              />
            ))}
          </ScrollView>
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
