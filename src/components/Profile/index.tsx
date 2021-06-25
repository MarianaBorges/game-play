import React from 'react';
import {
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';



export function Profile() {

  const {user,singOut} = useAuth();

  function hadleSignOut() {
    Alert.alert('Logout','Deseja sair do GamePlay?',
    [
      {
        text:'Não',
        style:'Cancel'
      },{
        text:'Sim',
        onPress:()=>{singOut()}
      }
    ]
  )
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={hadleSignOut}>
        <Avatar urlImage={user.avatar}/>
      </RectButton>
      <View>
      <View style={styles.user}>
        <Text style={styles.greeting}>Olá,</Text>

        <Text style={styles.userName}>{user.firstName}</Text>
      </View>
      <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
