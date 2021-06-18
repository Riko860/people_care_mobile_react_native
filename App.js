/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Router from './src/config/router';
import store from './src/redux';






const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <PaperProvider>
                    <NavigationContainer>
                        <Router/> 
                    </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
};



export default App;
