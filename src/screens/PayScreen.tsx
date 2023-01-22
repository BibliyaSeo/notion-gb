import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../components/Divider';
import ImageCard from '../components/ImageCard';
import ImageText from '../components/ImageText';
import PayCard from '../components/PayCard';
import {api} from '../api';
import {NOTION_PAY_DATABASE_ID} from '@env';
import {fontSytles} from '../styles/fontStyles';

export default function PayScreen() {
  const [payData, setPayData] = useState([]);
  const [won, setWon] = useState([]);
  const [wonTotal, setWonTotal] = useState(0);
  const [yen, setYen] = useState([]);
  const [yenTotal, setYenTotal] = useState(0);
  const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const daySort = {
      sorts: [
        {
          property: 'date',
          direction: 'ascending',
        },
      ],
    };

    const getOsakaPay = async () => {
      try {
        const res = await api.post(`/${NOTION_PAY_DATABASE_ID}/query`, daySort);
        setPayData(res.data.results);
        setWon(res.data.results.map((item: any) => item.properties.won.number));
        setYen(res.data.results.map((item: any) => item.properties.yen.number));
        setSubTotal(
          res.data.results.map(
            (item: any) => item.properties.total.formula.number,
          ),
        );
      } catch (error) {}
    };
    getOsakaPay();
  }, []);

  useEffect(() => {
    if (won.length !== 0) {
      setWonTotal(
        won.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
    if (yen.length !== 0) {
      setYenTotal(
        yen.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
    if (subTotal.length !== 0) {
      setTotal(
        subTotal.reduce((sum, currValue) => {
          return sum + currValue;
        }, 0),
      );
    }
  }, [subTotal.length]);
  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="P" title="AY" />
      <ScrollView className="px-4 py-2 bg-white">
        <Divider />
        <ImageCard photo={require('../assets/pay.jpg')} />
        <ImageText text="가계부" />
        <View className="mt-4">
          {payData?.map((item: any) => (
            <PayCard
              key={item.id}
              list={item.properties.list.title[0].plain_text}
              date={item.properties.date.date.start}
              day={item.properties.day.select.name}
              memo={item.properties.memo.rich_text[0]?.plain_text}
              type={item.properties.type.select.name}
              won={item.properties.won.number}
              yen={item.properties.yen.number}
            />
          ))}
        </View>
        <View className="flex items-center py-4">
          <View className="flex flex-row space-x-6 mb-2">
            <Text style={fontSytles.regular}>
              {wonTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
            <Text style={fontSytles.regular}>
              {yenTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}엔
            </Text>
          </View>

          <Text className="text-lg" style={fontSytles.bold}>
            전체: {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </Text>
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
