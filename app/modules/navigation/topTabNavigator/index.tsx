import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TabBarElement } from '../../../components/tabBarElement';
import { config } from '../../../config/config';
import styles from './styles';

export const TopTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    const data = ['VÖEN', 'Sənəd nömrəsi', 'FİN'];

    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}>
            {data.map((item, index) =>
                <Tab.Screen key={item + index} name={item} component={() => <TabBarElement name={item} />} />)}
        </Tab.Navigator >
    )
}


const MyTabBar = ({ state, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.name + index}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={{ ...styles.button, backgroundColor: isFocused ? config.mainColorDark : config.white }}>
                        <Text style={{ color: isFocused ? config.white : config.mainColorDark }}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}