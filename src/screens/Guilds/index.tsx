import React,{ useState, useEffect } from 'react';
import { Text,View,FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { api } from '../../services/api';
import { styles } from './styles';

type Props = {
  handlerGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handlerGuildSelect}) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds(){
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(()=>{
    fetchGuilds();
  },[])

  return (
    <View style={styles.container}>
      {
        loading ?
        <Load />:
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
      }
    </View>
  );
}
