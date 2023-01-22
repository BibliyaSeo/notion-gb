import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import ImageCard from '../components/ImageCard';
import ImageText from '../components/ImageText';
import {foodList} from '../data/foodList';
import FoodCard from '../components/FoodCard';

export default function FoodScreen() {
  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="F" title="OOD" />
      <ScrollView className="px-4 py-2 bg-white">
        <Divider />
        <View className="mt-4">
          {foodList.map((food: any, index: number) => (
            <FoodCard
              key={index}
              photo={food.photo}
              name={food.name}
              memo={food.memo}
            />
          ))}
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
