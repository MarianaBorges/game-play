import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png'

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({title, ...rest}: Props) {
  return(
  <TouchableOpacity
    style={styles.container}
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
  </TouchableOpacity>
);

}
