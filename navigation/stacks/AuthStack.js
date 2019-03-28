import React from 'react';
import {createStackNavigator} from "react-navigation";
import AuthLoadingScreen from '../../screens/AuthLoadingScreen';
import LoginScreen from '../../screens/LoginScreen';

const AuthStack = createStackNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: LoginScreen,
},{
    initialRouteName: "AuthLoading",
});

AuthStack.navigationOptions = {
    tabBarLabel: 'Auth'
};

export default AuthStack;
