import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from "react-native";

class FormForecast extends Component {
    state = {
        queriedCity: 'Entrez le nom d\'une ville...'
    };

    fetchCity = () => {
        this.props.actions.fetchCity(this.state.queriedCity);
    };

    clearInput = () => {
        this.setState(
            {queriedCity: ''}
        )
    };

    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    value={this.state.queriedCity}
                    onFocus={this.clearInput}
                    onChangeText={query => this.setState({queriedCity: query})}
                    onSubmitEditing={this.fetchCity}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={this.fetchCity}
                            title={'Chercher'}
                            color={'#fff'}
                            accessibilityLabel={'Faire une recherche'}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default FormForecast;
