import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FormForecast from '../components/FormForecast';
import {fetchCity} from "../actions/forecast";

const mapStateToProps = (state) => {
    return {
        history: state.forecast.history,
        currentCity: state.forecast.currentCity
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({fetchCity}, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormForecast)
