import React from 'react';
import { Text,View,FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import {ListDivider} from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handlerGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handlerGuildSelect}) {
  const guilds = [
    {
      id: '1',
      name:'Lendários',
      icon: 'image',
      owner: true
    },
    {
      id: '2',
      name:'Lendários',
      icon: 'image',
      owner: true
    },
    {
      id: '3',
      name:'Lendários',
      icon: 'image',
      owner: true
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item=>item.id}
        renderItem={({item})=>(
          <Guild
            data={item}
            onPress={()=>{
              handlerGuildSelect(item)
            }}
          />
        )}
        ItemSeparatorComponent={()=><ListDivider isCentered/>}
        ListHeaderComponentStyle={()=><ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom:68, paddingTop:103}}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
