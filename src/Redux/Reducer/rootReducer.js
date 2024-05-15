import { combineReducers } from 'redux';

// A simple example reducer
const exampleReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
