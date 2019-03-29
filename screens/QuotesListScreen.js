import React, {Component} from 'react';
import QuotesList from "../containers/QuotesList";
import auth from "../hocs/auth";

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

export default auth('Auth')(QuotesListScreen);
