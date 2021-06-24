import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import {ListDivider} from '../../components/ListDivider'
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import { styles } from './styles';
import {theme} from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

export function AppointmentDetails() {

  const members = [
    {
      id: '1',
      username:'Mariana',
      avatar_url: 'https://images.vexels.com/media/users/3/158065/isolated/lists/86cd97d8487df2ed7e7c26e8009bcac3-avatar-de-mulher-de-cabelo-longo-cacheado.png',
      status: 'online',
    },
    {
      id: '2',
      username:'Marta',
      avatar_url: 'https://images.vexels.com/media/users/3/158065/isolated/lists/86cd97d8487df2ed7e7c26e8009bcac3-avatar-de-mulher-de-cabelo-longo-cacheado.png',
      status: 'offline',
    },
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
        >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chellenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="jogadores"
        subtitle="Total 3"
      />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <Member
            data={item}
          />
        )}
        ItemSeparatorComponent={()=><ListDivider/>}
        style={styles.members}
      />
      <View style={styles.footer}>
       <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
