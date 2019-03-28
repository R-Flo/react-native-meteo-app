import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultForecast = props => {

    const isSunny = 1000;
    const isCloudy = 1003;
    const isRainy = 1189;
    const conditionCode = props.currentCity.current.condition.code;

    return (
        <View style={styles.wrapper}>
            <View style={styles.smallIconContainer}>
                <Image style={{width: 34, height: 34}} source={require('../assets/img/thermometer.png')}/>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 24}]}>{props.currentCity.current.temp_c}°</Text>
            </View>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>{props.currentCity.current.condition.text}</Text>

            <View style={styles.iconContainer}>
                {conditionCode === isCloudy &&
                <Image style={styles.icon} source={require('../assets/img/cloudy.png')}/>}
                {conditionCode === isSunny &&
                <Image style={styles.icon} source={require('../assets/img/sunny.png')}/>}
                {conditionCode === isRainy &&
                <Image style={styles.icon} source={require('../assets/img/raining.png')}/>}
            </View>

            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 32}]}>{props.currentCity.location.name}</Text>
            <Text
                style={[styles.text, {fontWeight: 'normal', fontSize: 22}]}> {props.currentCity.location.country}</Text>
            <View style={{marginTop: 20}}>
                <View style={styles.smallIconContainer}>
                    <Image style={[styles.smallIcon, {marginRight: 14}]} source={require('../assets/img/wind.png')}/>
                    <Text style={styles.text}>Vent: {props.currentCity.current.wind_kph} km/h</Text>
                </View>
                <Text style={styles.text}>Dernière mise à jour: {props.currentCity.current.last_updated}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    smallIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    smallIcon: {
        width: 24,
        height: 24
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    wrapper: {
        marginTop: 50,
        marginBottom: 50
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    icon: {
        width: 200,
        height: 200
    }
});

export default ResultForecast;
