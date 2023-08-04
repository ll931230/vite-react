import {useReducer} from 'react';

function reducer(state, action) {
  switch (action.idx) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}


function useShippingCart(nums, step = 1) {
  const initialState = [...Array(nums)].map(() => 0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return {
    count,
    increment,
    decrement,
  };
}

export default useShippingCart;
