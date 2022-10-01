import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrowIcon from '../../assets/svg/BackArrowIcon';
import styles from './styles';

const MainHeader: FC<{ title: string; isBack?: boolean, onBackPress?: () => void }> = ({ title, isBack = true, onBackPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // onBackPress && onBackPress()
            navigation.goBack();
          }}>
          <BackArrowIcon />
        </TouchableOpacity>
      ) : <></>}
      <Text
        numberOfLines={1}
        style={isBack ? styles.title : styles.titleWithButton}>
        {title}
      </Text>
    </View>
  );
};

export default MainHeader;
