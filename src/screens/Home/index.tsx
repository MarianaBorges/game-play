import React,{useState,useCallback} from 'react';
import {
  FlatList,
  Text,
  View,
  Image
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLLECTION_APPOINTMENTS} from '../../configs/database';

import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategorySelect} from '../../components/CategorySelect'
import {ListHeader} from '../../components/ListHeader'
import {ListDivider} from '../../components/ListDivider'
import {Load} from '../../components/Load'
import {Appointment,AppointmentProps} from '../../components/Appointment'
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home() {

  const navigation = useNavigation();

  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments,setAppointments] = useState('');

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory(''):setCategory(categoryId);
  }

  function handleAppontmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails',{guildSelected});
  }
  function handlerAppointmentCreate(){
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointments(){
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage:AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    }else{
      setAppointments(storage);

    }
    setLoading(false);
  }

  useFocusEffect(useCallback(()=>{
    loadAppointments();
  },[category]))

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
      {
        loading ? <Load /> :
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
              <Appointment
                data={item}
                onPress={()=>handleAppontmentDetails(item)}
                />
            )}
            ItemSeparatorComponent={()=><ListDivider/>}
            contentContainerStyle={{paddingBottom:69}}
            showsVerticalScrollIndicator
            style={styles.matches}
          />
        </>
      }

    </Background>
  );
}
