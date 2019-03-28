import React, {Component} from 'react';
import {RefreshControl, ScrollView, FlatList, View, Alert, TextInput, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default class ForeCastMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#aaa',
                height: 300,
                width: '100%',
                marginBottom: 50
            }}>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: parseFloat(this.props.data.lat),
                        longitude: parseFloat(this.props.data.lon),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    region={{
                        latitude: parseFloat(this.props.data.lat),
                        longitude: parseFloat(this.props.data.lon),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(this.props.data.lat),
                            longitude: parseFloat(this.props.data.lon)
                        }}
                        title={this.props.data.display_name}
                        description={this.props.data.display_name}
                    />
                </MapView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
