import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'

class QuotesListItem extends Component {

    render() {
        const quote = this.props.quote;
        return (
            <TouchableOpacity
                style={{width: '90%', borderRadius: 5}}
                onPress={() => this.props.onPress(quote)}
                onLongPress={() => this.props.onLongPress(quote)}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.text}>
                        <Text style={styles.quoteIcon}>"</Text>{this.props.quote.value}<Text
                        style={styles.quoteIcon}>"</Text>
                    </Text>
                    <Icon name='ios-arrow-forward'
                          type='ionicon'
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 20,
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        borderRadius: 5
    },
    text: {
        flex: 0.9
    },
    quoteIcon: {
        fontWeight: 'bold',
    }
});

export default QuotesListItem;
