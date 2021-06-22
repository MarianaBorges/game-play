import React,{useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image } from 'react-native';
import { styles } from './styles';

import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategorySelect} from '../../components/CategorySelect'
import {ListHeader} from '../../components/ListHeader'
import {ListDivider} from '../../components/ListDivider'
import {Appointment} from '../../components/Appointment'

export function Home() {

  const [category, setCategory] = useState('');

  const appointmwnts =[
    {
      id: '1',
      guild: {
        id:'1',
        name:'Lendários',
        icon:null,
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
        name:'Lendários',
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

  return (
    <View>
      <View style={styles.header}>
      <Profile />
      <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle="total 6"
        />

        <FlatList
          data={appointmwnts}
          keyExtractor={item=>item.id}
          renderItem={({item})=>(
            <Appointment data={item}/>
          )}
          ItemSeparatorComponent={()=><ListDivider/>}
          style={styles.matches}
        />

      </View>
    </View>
  );
}
