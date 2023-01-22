import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSytles} from '../styles/fontStyles';

interface MemoStickerProps {
  bgColor: string;
  icon: string;
  memo: string;
  color: string;
}

export default function MemoSticker({
  bgColor,
  icon,
  memo,
  color,
}: MemoStickerProps) {
  return (
    <View className={`${bgColor} flex-row items-center py-3 px-3 space-x-2`}>
      <Ionicons name={icon} size={20} color={color} />
      <Text style={fontSytles.bold} className="text-gray-800 text-sm">
        {memo}
      </Text>
    </View>
  );
}
