import React, {Component} from 'react';
import {View, Text} from 'react-native';


class QuoteDetailsScreen extends Component {
    render() {
        const quote = this.props.navigation.getParam('quote');
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{quote.value}</Text>
                {quote.tags.map((item, index) => {
                    return <Text key={index}>Tags: {item}</Text>
                })}
                <Text>Created at: {quote.appeared_at}</Text>
            </View>
        )
    }
}

export default QuoteDetailsScreen;
