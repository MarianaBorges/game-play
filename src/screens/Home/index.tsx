import React,{useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { styles } from './styles';

import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategorySelect} from '../../components/CategorySelect'
import {ListHeader} from '../../components/ListHeader'
import {ListDivider} from '../../components/ListDivider'
import {Appointment} from '../../components/Appointment'

import { Background } from '../../components/Background';

export function Home() {

  const navigation = useNavigation();

  const [category, setCategory] = useState('');

  const appointmwnts =[
    {
      id: '1',
      guild: {
        id:'1',
        name:'Lendários',
        icon:'image.a',
        owner: true
      },
      category:'1',
      date:'22/06 às 20:40h',
      description: 'É hoje que vamos chegar oa challenger se perder uma partidada md10 '
    },
    {
      id: '2',
      guild: {
        id:'1',
        name:'Marta',
        icon:null,
        owner: true
      },
      category:'1',
      date:'22/06 às 20:40h',
      description: 'É hoje que vamos chegar oa challenger se perder uma partidada md10 '
    }
  ]

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory(''):setCategory(categoryId);
  }

  function handleAppontmentDetails() {
    navigation.navigate('AppointmentDetails');
  }
  function handlerAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
      <Profile />
      <ButtonAdd onPress={handlerAppointmentCreate}/>
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>

        <ListHeader
          title="Partidas agendadas"
          subtitle="total 6"
        />

        <FlatList
          data={appointmwnts}
          keyExtractor={item=>item.id}
          renderItem={({item})=>(
            <Appointment
              data={item}
              onPress={handleAppontmentDetails}
              />
          )}
          ItemSeparatorComponent={()=><ListDivider/>}
          contentContainerStyle={{paddingBottom:69}}
          showsVerticalScrollIndicator
          style={styles.matches}
        />

    </Background>
  );
}
