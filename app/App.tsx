import React, {FC} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {store} from './modules/redux/store';
import {Provider} from 'react-redux';
import {RootNavigator} from './modules/navigation';
import {config} from './config/config';
import {GlobalModal} from './components/globalModal';


const App: FC<{}> = () => {

    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
