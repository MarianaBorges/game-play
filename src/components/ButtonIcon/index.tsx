import React from 'react';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';
import {
  Text,
  View,
  Image,
} from 'react-native';

import DiscordImg from '../../assets/discord.png'

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({title,onPress, ...rest}: Props) {
  return(
  <RectButton
    style={styles.container}
    onPress={onPress}
    >
    <View style={styles.iconWrapper}>
      <Image
        style={styles.icon}
        source={DiscordImg}
      />
    </View>

    <Text style={styles.title}>
      {title}
    </Text>
  </RectButton>
);

}
