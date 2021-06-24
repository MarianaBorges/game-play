import React from 'react';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';
import {
  Text,
  View,
} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function Button({title,onPress, ...rest}: Props) {
  return(
  <RectButton
    style={styles.container}
    onPress={onPress}
    >
    <Text style={styles.title}>
      {title}
    </Text>
  </RectButton>
);

}
