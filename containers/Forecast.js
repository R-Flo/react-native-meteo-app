import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Forecast from '../components/Forecast';
import {toggleLoader} from '../actions/loader';

const mapStateToProps = (state) => {
    return {
        isLoaderDisplayed : state.loader.isLoaderDisplayed,
        history: state.forecast.history,
        currentCity: state.forecast.currentCity,
        currentCityGeocode: state.forecast.currentCityGeocode
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({toggleLoader}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
