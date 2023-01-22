import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../components/Divider';
import DdayTimer from '../components/DdayTimer';
import MemoSticker from '../components/MemoSticker';
import PageList from '../components/PageList';
import ImageCard from '../components/ImageCard';
import ImageText from '../components/ImageText';
import Header from '../components/Header';

export default function MainScreen() {
  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="O" title="SAKA TRAVEL PLAN" />
      <ScrollView className="px-4 pt-2 bg-white">
        <Divider />
        <DdayTimer />
        <MemoSticker
          bgColor="bg-pink-50"
          icon="heart-circle"
          memo="성경이네 오사카, 교토, 고베 여행"
          color="#cb0849"
        />
        <ImageCard photo={require('../assets/main_japan.jpg')} />
        <MemoSticker
          bgColor="bg-pink-50"
          icon="airplane"
          memo="My Travel"
          color="#cb0849"
        />
        <PageList />
        <ImageCard photo={require('../assets/osaka.jpg')} />
        <ImageText text="Osaka" />
        <ImageCard photo={require('../assets/universal.jpg')} />
        <ImageText text="Universal Studio" />
        <ImageCard photo={require('../assets/kyoto.jpg')} />
        <ImageText text="Kyoto" />
        <ImageCard photo={require('../assets/kobe.jpg')} />
        <ImageText text="Kobe" />

        <View className="h-28 w-screen"></View>
      </ScrollView>
    </View>
  );
}
