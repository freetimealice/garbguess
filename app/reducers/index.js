import { combineReducers } from 'redux';
import * as aTypes from '../actions';

const clothes = (state = [], action) => {
  switch (action.type) {
    case aTypes.GOT_CLOTHES:
      return action.clothes;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  clothes,
});

export default rootReducer;
