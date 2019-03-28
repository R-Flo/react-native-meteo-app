import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import FormForecast from '../containers/FormForecast';
import ResultForecast from './ResultForecast';
import HistoryForecast from './HistoryForecast';
import MapForecast from './MapForecast';
import Loader from './Loader';

export default class Forecast extends Component {

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
        if (this.props.isLoaderDisplayed) {
            return <Loader/>
        } else {
            return (
                <View style={styles.wrapper}>
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
