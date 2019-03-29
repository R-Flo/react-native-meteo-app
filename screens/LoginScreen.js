import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, AsyncStorage, Alert} from 'react-native';
import { Facebook } from 'expo';

class LoginScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerTitle: null,
            headerLeft: null,
            headerRight: null,
        };
    };

    async bypassLogIn () {
        await AsyncStorage.setItem('userToken', 'bypass');
        await AsyncStorage.setItem('loginType', 'bypass');
        this.props.navigation.navigate('Home');
    }

    async logIn () {
        try {
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('1121386381376964', {
                permissions: ['public_profile'],
            });

            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                await AsyncStorage.setItem('userToken', token);
                await AsyncStorage.setItem('loginType', 'facebook');
                this.props.navigation.navigate('Home');
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }


    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Login With Facebook</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.logIn()}
                            title={'Log In'}
                            color={'#b60789'}
                            accessibilityLabel={'Log In'}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.bypassLogIn()}
                            title={'Easy Log In'}
                            color={'#b60789'}
                            accessibilityLabel={'Easy Log In'}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#b634b4'
   },
    text: {
        fontSize: 48,
        fontWeight: '300',
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        fontSize: 16,
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: 3
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 3,
        marginTop: 30
    }
});

export default LoginScreen;
