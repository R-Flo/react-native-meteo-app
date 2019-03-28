import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const HistoryForecast = props => {

    const renderFlatListItem = (item) => {
        return (
            <View>
                <Text>{item}</Text>
            </View>
        )
    };

    return (
        <FlatList
            data={this.props.history}
            renderItem={({item}) => renderFlatListItem(item)}
            keyExtractor={(item, index) => String(index)}
        />
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#fff'
    }
});

export default HistoryForecast;
