import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontSytles} from '../styles/fontStyles';
import PlanCard from '../components/PlanCard';
// import {planList} from '../data/planList';
import ImageCard from '../components/ImageCard';
import ImageText from '../components/ImageText';
import Divider from '../components/Divider';
import Header from '../components/Header';
import {api} from '../api';
import {NOTION_PLAN_DATABASE_ID} from '@env';

export default function PlanScreen() {
  const [planData, setPlanData] = useState([]);
  const daySort = {
    sorts: [
      {
        property: 'day',
        direction: 'ascending',
      },
    ],
  };

  useEffect(() => {
    const getOsakaPlan = async () => {
      const res = await api.post(`/${NOTION_PLAN_DATABASE_ID}/query`, daySort);
      setPlanData(res.data?.results);
    };
    getOsakaPlan();
  }, []);

  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="P" title="LAN" />
      <ScrollView className="px-4 py-2 bg-white">
        <Divider />
        <ImageCard photo={require('../assets/plan.jpg')} />
        <ImageText text="여행 계획" />
        <View className="mt-4">
          {planData?.map((item: any) => (
            <PlanCard
              key={item.id}
              date={item.properties.date.date.start}
              title={item.properties.title.title[0].plain_text}
              day={item.properties.day.select.name}
              memo={item.properties.memo.rich_text[0].plain_text}
            />
          ))}
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
