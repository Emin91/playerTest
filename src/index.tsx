import React from 'react';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Provider } from '../src/provider'
import { Screens } from '../src/screens';

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider>

        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Screens />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App