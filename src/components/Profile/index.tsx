import React from 'react';
import {
  Text,
  View,
  Image } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';



export function Profile() {

  return (
    <View style={styles.container}>
      <Avatar urlImage='https://images.vexels.com/media/users/3/158065/isolated/lists/86cd97d8487df2ed7e7c26e8009bcac3-avatar-de-mulher-de-cabelo-longo-cacheado.png'/>
      <View>
      <View style={styles.user}>
        <Text style={styles.greeting}>Olá,</Text>

        <Text style={styles.userName}>Mariana</Text>
      </View>
      <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
