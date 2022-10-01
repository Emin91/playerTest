import {View, Text, ScrollView, FlatList, SectionList} from 'react-native';
import React, {FC} from 'react';
import {config} from '../../config/config';
import MainHeader from '../../components/mainHeader';
import {TopTabNavigator} from '../../modules/navigation/topTabNavigator';
import styles from './styles';
import {ItemWithPrice} from '../../components/itemWithPrice';
import {servicesDataList} from './tempData';

interface Props {
  navigation: any;
}

export const ElectronServices: FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: config.mainColor}}>
      <MainHeader title={'E-xidmətlər'} />
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: config.white,
          paddingHorizontal: 10,
        }}>
        <SectionList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
          sections={servicesDataList}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => <ItemWithPrice {...{item}} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.title}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
};
