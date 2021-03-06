import React from 'react';
import {RectButton,RectButtonProps} from 'react-native-gesture-handler';
import {
  Text,
  View,
  ScrollView
 } from 'react-native';
import { styles } from './styles';
import {categories} from '../../utils/categories';
import {theme} from '../../global/styles/theme';
import {Category} from '../Category';

type Props = {
  categorySelected: string;
  setCategory:(categoryId:string)=>void;
  hasCheckBox?:boolean;
}

export function CategorySelect({categorySelected,setCategory,hasCheckBox=false}:Props) {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:50}}
      >
      {
        categories.map(category=>(
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={()=>setCategory(category.id)}
            hasCheckBox={hasCheckBox}
          />
        ))
      }

    </ScrollView>
  );
}
