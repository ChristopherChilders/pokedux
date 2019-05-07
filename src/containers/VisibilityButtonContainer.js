import {connect} from 'react-redux';
import VisibilityButton from '../components/VisiblilityButton';
import {setVisibilityAll, setVisibilityCaught, setVisibilityUncaught} from '../actions-reducer';

// gotta translate from redux state to react props
const mapStateToProps = (state) => {
    return {
        label: state.visibilityFilter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(setVisibilityAll(id))
        }
    }
}

const makeComponentSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartVisibilityButton = makeComponentSmart(VisibilityButton);

export default SmartVisibilityButton;