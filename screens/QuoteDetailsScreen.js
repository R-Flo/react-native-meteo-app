import React, {Component} from 'react';
import {View, ScrollView, Text, Button, TextInput, Image, StyleSheet, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from 'moment';
import {SMS} from 'expo';
import auth from "../hocs/auth";

class QuoteDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: ''
        }
    }

    static navigationOptions = {
        title: 'Quote Details',
    };

    sendMessage = async () => {
        const sms = await SMS.sendSMSAsync([this.state.phoneNumber], `Donald Trump a dit : \n ${this.props.navigation.getParam('quote').value}. \n\nCe message a été envoyé via Meteo Forecast.`);
        if (sms.result === 'sent') {
            Alert.alert('Succès !', 'Votre citation a bien été envoyée !')
        }
    };

    clearText = () => {
        this.setState({phoneNumber: ''})
    };

    render() {
        const quote = this.props.navigation.getParam('quote');
        const date = moment(quote.appeared_at).format('DD/MM/YYYY');
        const hour = moment(quote.appeared_at).format('H');
        const minutes = moment(quote.appeared_at).format('mm');

        return (
            <KeyboardAwareScrollView style={styles.wrapper}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/trump.jpeg')}
                           style={styles.image}
                    />
                </View>
                <View style={styles.quoteContainer}>
                    <Text style={[styles.text, {fontStyle: 'italic'}]}>{quote.value}</Text>
                </View>
                {quote.tags.map((item, index) => {
                    return <Text style={[styles.text, {marginLeft: 20}]} key={index}><Text
                        style={[styles.text, {fontWeight: 'bold'}]}>Tags:</Text> {item}</Text>
                })}
                <Text style={[styles.text, {marginLeft: 20}]}><Text style={[styles.text, {fontWeight: 'bold'}]}>Posté
                    le: </Text>{date} à {hour}h{minutes}</Text>
                <View style={{marginTop: 20, flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff'}}>Envoyez cet extrait de poésie à un.e ami.e :</Text>
                    <TextInput style={styles.enterNumber}
                               onChangeText={phoneNumber => this.setState({phoneNumber})}
                               onSubmitEditing={this.sendMessage}
                               keyboardType={'number-pad'}
                    />
                    <Button onPress={this.sendMessage}
                            title={'Envoyer'}
                            color={'#fff'}
                    />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#1abc9c'
    },
    imageContainer: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: 10
    },
    image: {
        resizeMode: 'contain'
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    quoteContainer: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        margin: 20
    },
    enterNumber: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        width: '50%',
        fontSize: 16,
        color: '#fff',
        padding: 5
    }
});
export default auth('Auth')(QuoteDetailsScreen);
