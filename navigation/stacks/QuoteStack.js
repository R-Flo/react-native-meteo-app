import React from 'react';
import {createStackNavigator} from 'react-navigation';
import QuotesListScreen from "../../screens/QuotesListScreen";
import QuoteDetailsScreen from '../../screens/QuoteDetailsScreen';

const QuotesStack = createStackNavigator({
    QuotesList: QuotesListScreen,
    QuoteDetails: QuoteDetailsScreen
});

QuotesStack.navigationOptions = {
    tabBarLabel: 'Quotes'
};
export default QuotesStack;
