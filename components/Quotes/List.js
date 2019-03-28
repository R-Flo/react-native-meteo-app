import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text, Button, StyleSheet, RefreshControl, Linking} from "react-native";
import QuotesListItem from './ListItem';
import Loader from '../Loader';

class QuotesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        }
    }


    renderQuotesItem = () => {
        return this.props.quotesList.map((item, index) => {
            return <QuotesListItem
                        key={index}
                        quote={item}
                        onPress={(quote) => this.props.onQuotePress(quote)}
                        onLongPress={(quote) => Linking.openURL(quote._embedded.source[0].url)}
            />
        })
    };


    fetchQuote = () => {
        this.setState({refreshing:true});
        this.props.actions.fetchQuote();
        this.setState({refreshing:false});
    };

    keyExtractor = (item, index) => {
        return String(index);
    };

    render() {
        return (
            <ScrollView
                style={styles.wrapper}
                contentContainerStyle={{flexDirection: 'column', alignItems: 'center'}}

                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.fetchQuote}
                    />
                }

            >
                <Text style={styles.title}>Donald Trump a dit...</Text>


                {this.renderQuotesItem()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1abc9c',
        paddingTop: 24
    },
    buttonContainer: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '50%',
        borderRadius: 5,
        marginTop: 24
    },
    title: {
        fontWeight: '300',
        fontSize: 30,
        color: '#fff'
    }
});

export default QuotesList;
