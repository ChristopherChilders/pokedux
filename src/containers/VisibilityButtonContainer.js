import {connect} from 'react-redux';
import VisibilityButton from '../components/VisiblilityButton';
import {setVisibilityAll, setVisibilityCaught, setVisibilityUncaught} from '../actions-reducer';

// gotta translate from redux state to react props
const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(setVisibilityAll());
        },
        handleClick: () => {
            dispatch(setVisibilityCaught());
        },
        handleClick: () => {
            dispatch(setVisibilityUncaught());
        }
    }
}

const makeComponentSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartVisibilityButton = makeComponentSmart(VisibilityButton);

export default SmartVisibilityButton;