import React, {Component} from 'react';
import QuotesList from "../containers/QuotesList";

class QuotesListScreen extends Component {

    goToSingleQuote = (quote) => {
        this.props.navigation.navigate('QuoteDetails', {quote})
    };

    render() {
        return (
            <QuotesList onQuotePress={this.goToSingleQuote}/>
        )
    }
}

export default QuotesListScreen;
