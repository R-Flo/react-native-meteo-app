import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeStack from './stacks/HomeStack';
import MeteoStack from './stacks/MeteoStack';
import QuotesStack from './stacks/QuoteStack';
import AuthStack from './stacks/AuthStack';

const BottomNavigator = createBottomTabNavigator({
        Home: HomeStack,
        MeteoForecast: MeteoStack,
        Quotes: QuotesStack
    }
);

const MainStack = createStackNavigator({
        MainAuth: AuthStack,
        Main: BottomNavigator,
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default createAppContainer(MainStack)
