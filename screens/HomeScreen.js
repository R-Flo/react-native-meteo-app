import React from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Bienvenue sur Meteo Forecast !</Text>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.logOut()}
                            title={'Log Out'}
                            color={'#0d67b6'}
                            accessibilityLabel={'Log Out'}
                    />
                </View>
            </View>
        )
    }

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

const styles = StyleSheet.create({
   wrapper: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#3187b6'
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

export default HomeScreen;
