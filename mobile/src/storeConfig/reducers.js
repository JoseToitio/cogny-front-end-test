import { combineReducers } from 'redux';

const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
