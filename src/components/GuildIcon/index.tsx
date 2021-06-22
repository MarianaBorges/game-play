import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3H29DelFC_3zrQdRCbMbrQmGYpdwrgWcTwg&usqp=CAU";
  return (
    <Image
      source={{uri}}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
