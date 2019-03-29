import React, {Component} from 'react';
import {AsyncStorage, Alert} from "react-native";
import { withNavigationFocus } from 'react-navigation';


export default (route) => {
    return (Screen) =>{
        return withNavigationFocus(class extends React.Component {

            async checkApi(){
                const token = await AsyncStorage.getItem('userToken');
                const loginType = await AsyncStorage.getItem('loginType');
                if(loginType !== "bypass"){
                    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                    const data = await response.json();
                    if(data.error) {
                        this.navigation.navigate(route);
                    }else{
                        Alert.alert('Logged in!', `Hi ${data.name}!`);
                    }
                }
            }

            render() {
                if(this.props.isFocused)
                    this.checkApi();
                return <Screen {...this.props} />
            }
        })
    }
};
