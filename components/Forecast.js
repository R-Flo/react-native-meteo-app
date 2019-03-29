import React, {Component} from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
import FormForecast from '../containers/FormForecast';
import ResultForecast from './ResultForecast';
import HistoryForecast from './HistoryForecast';
import MapForecast from './MapForecast';
import Loader from './Loader';
import { Constants, Permissions, Location } from 'expo';


export default class Forecast extends Component {

    state = {
        location: null,
        address: null,
        errorMessage: null
    };


    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        let address = await Location.reverseGeocodeAsync(location.coords);
        console.log( address );
        this.setState({ location, address });
    };

    sendBackgroundToParent = () => {
        if (this.props.currentCity.current === undefined) {
            return null
        }
        // not clean; I send the condition code to the parent Component via props()
        this.props.setBackground(this.props.currentCity.current.condition.code)
    };

    componentDidUpdate() {
        this.sendBackgroundToParent()
    }

    render() {

        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.address);
        }


        if (this.props.isLoaderDisplayed) {
            return <Loader/>
        } else {
            return (
                <View style={styles.wrapper}>

                    <View>
                        <Text style={styles.paragraph}>{text}</Text>
                    </View>

                    {this.props.currentCity.location && <ResultForecast currentCity={this.props.currentCity}/>}
                    {this.props.currentCityGeocode && <MapForecast data={this.props.currentCityGeocode}/>}
                    <FormForecast/>
                    {/**
                     NOT FUNCTIONNAL YET
                     {this.props.history !== [] && <HistoryForecast history={this.props.history}/>}
                     */}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
    }
});
