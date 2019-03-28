import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import QuotesList from '../components/Quotes/List';
import {fetchQuote} from '../actions/quote';
import {toggleLoader} from "../actions/loader";

const mapStateToProps = state => {
    return {
        quotesList: state.quotes.quotesList,
        isLoaderDisplayed : state.loader.isLoaderDisplayed,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({fetchQuote, toggleLoader}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesList)
