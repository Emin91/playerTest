import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import BackArrowIcon from '../../assets/svg/BackArrowIcon';
import { FreeIcon } from '../../assets/svg/freeIcon';
import styles from './styles';

export const ItemWithPrice: FC<{
  item: any;
}> = ({item}) => {
  return (
    <Pressable style={(({pressed}) => [styles.container, {opacity: pressed ? 0.7 : 1}])}>
      <Text style={[styles.title, {flex: 0.85}]}>{item.info}</Text>
      <View style={styles.priceContainer}>
        <View style={styles.separator} />
        <View style={styles.priceWrapper}>
          {item.price ? (
            <>
              <Text numberOfLines={1} style={styles.title}>
                {item.price}
              </Text>
              <Text numberOfLines={1} style={styles.title}>
                {item.currency}
              </Text>
            </>
          ) : <FreeIcon />}
        </View>
      </View>
    </Pressable>
  );
};
