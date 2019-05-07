////////////////////////////////////////////////////////////////////
// State
import { combineReducers } from 'redux';
import initialCards from './base.json';
// console.log(initialState);  

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards,        // This spreads the "cards": [...] into this spot in initialState
    // cards: initialCards.cards // this line is the equivalent of ...initialCards 
    visibilityFilter: VISIBILITY_ALL
}

// The state is an object with a cards property which is and array of objects
// { cards: [{}, {}, {}] } 

/////////////////////////////////////////////////////////////////////
// ACTIONS + ACTION CREATORS
const ACTION_CATCH = 'catch';

export function catchCard (id) {
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}
window.catchCard = catchCard;

const ACTION_VISIBILTIY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILTIY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILTIY_UNCAUGHT = VISIBILITY_UNCAUGHT;

export function setVisibilityAll(){
    return {
        type: ACTION_VISIBILTIY_ALL
    };
}
export function setVisibilityCaught(){
    return {
        type: ACTION_VISIBILTIY_CAUGHT
    };
}
export function setVisibilityUncaught(){
    return {
        type: ACTION_VISIBILTIY_UNCAUGHT
    };
}
window.setVisibilityAll = setVisibilityAll
window.setVisibilityCaught = setVisibilityCaught
window.setVisibilityUncaught = setVisibilityUncaught

/////////////////////////////////////////////////////////////////////
// REDUCER
function cards(state=initialState.cards, action={type: ''}){
    switch(action.type){
        case ACTION_CATCH:
            // find the card, set it to "caught"
            const newState = state.map(card => {
                    if(card.id === action.payload.id){
                        return {
                            ...card,
                            isCaught: true
                        }
                    } else {
                        return card;
                    }
                });
            // Whatever is returned by the reducer is automatically used by the store as the new version of state.
            return newState;
        break;
        default:
            return state;
        break;
    }
}

// Old way
///////////////////////////////////////////////////////////////////////////
// function visibility(state=initialState.visibilityFilter, action={type:''}){
//     switch(action.type){
//         case ACTION_VISIBILTIY_ALL:
//             // needs to set the visibility to all
//             return {
//                 visibilityFilter: VISIBILITY_ALL
//             };
//         break;
//         case ACTION_VISIBILTIY_CAUGHT:
//             // needs to set it up to only show pokemon that have been caught/drawn
//             return {
//                 visibilityFilter: VISIBILITY_CAUGHT
//             };
//         break;
//         case ACTION_VISIBILTIY_UNCAUGHT:
//             // needs to set it up to show pokemon that are uncaught/not drawn
//             return {
//                 visibilityFilter: VISIBILITY_UNCAUGHT
//             };
//         break;
//         default:
//             return state;
//         break;
//     } 
// }

// New Way
/////////////////////////////////////////////////////////////////////
function visibility(state=initialState.visibilityFilter, action={type:''}){
    switch(action.type){
        case ACTION_VISIBILTIY_ALL:
            return VISIBILITY_ALL
        break;
        case ACTION_VISIBILTIY_CAUGHT:
            return VISIBILITY_CAUGHT
        break;
        case ACTION_VISIBILTIY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT
        break;
        default:
            return state;
        break;
    }
}
////////////////////////////////////////////////////////////////////

// This is where you are assigning responsibilty of one piece of stat to one reducer
export const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visibility
});
