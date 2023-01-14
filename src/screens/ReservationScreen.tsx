import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Divider from '../components/Divider';
import ReservationCard from '../components/ReservationCard';
import ImageCard from '../components/ImageCard';
import ImageText from '../components/ImageText';
import {reservationList} from '../data/reservationList';
// import MemoSticker from '../components/MemoSticker';

export default function ReservationScreen() {
  return (
    <View className={`min-h-screen min-w-screen`}>
      <Header first="R" title="ESERVATION" />
      <ScrollView className="px-4 py-2 bg-white">
        <Divider />
        <ImageCard photo={require('../assets/reservation.jpg')} />
        <ImageText text="예약 내역" />
        {/* <MemoSticker bgColor="bg-gray-200" /> */}
        <View className="mt-4">
          {reservationList.map((reservation, index): any => (
            <ReservationCard
              key={index}
              name={reservation.name}
              english={reservation.english}
              date={reservation.date}
              type={reservation.type}
              memo={reservation.memo}
              reservationNumber={reservation.reservationNumber}
              url={reservation.url}
              url2={reservation.url2}
            />
          ))}
        </View>
        <View className="h-24 w-screen"></View>
      </ScrollView>
    </View>
  );
}
