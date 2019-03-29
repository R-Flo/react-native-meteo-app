import React, {Component} from 'react';
import Title from "../components/Title";
import Forecast from '../containers/Forecast';
import {ScrollView, StyleSheet} from "react-native";
import auth from '../hocs/auth'

class MeteoScreen extends Component {
    state = {
      backgroundColor: '#3E8BB8'
    };


    setBackgroundColor = weather => {
        if (weather === 1000) {
            this.setState({backgroundColor: '#f1c40f'});
        } else if (weather === 1003) {
            this.setState({backgroundColor: '#95a5a6'});
        } else if (weather === 1189) {
            this.setState({backgroundColor: '#34495e'});
        }
    };

    render() {
        return (
            <ScrollView style={[styles.globalContainer, {backgroundColor: this.state.backgroundColor}]}>
                <Title title='Meteo Forecast'/>
                <Forecast setBackground={this.setBackgroundColor}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    globalContainer: {
        flex: 1
    }
});

export default auth('Auth')(MeteoScreen);
