// importing redux object
const redux = require('redux'); 

// creating reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
}; 

// creating a store
const store = redux.createStore(counterReducer); 

// creating a subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// create an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

