import React from 'react';
import {createStackNavigator} from 'react-navigation';
import MeteoScreen from '../../screens/MeteoScreen';

const MeteoStack = createStackNavigator({
    Meteo: MeteoScreen,
});
MeteoStack.navigationOptions = {
    tabBarLabel: 'Meteo'
};
export default MeteoStack;
