import React, { createContext,useReducer } from 'react';
import { INCREMENT, GRID_INITIALIZE } from './actions/app'

const AppContext = createContext();
let initialState = {
  count:0,
  loading: false,
  grid:null,
  error: null,
  payload: null,
  status: null,
  response: null,
};


const actionsMap = {
  [INCREMENT]: (state) => {
    const initDate = state.count++;
    return {
      ...state,
      initDate
    }
  },
  [GRID_INITIALIZE]: (state,action) => {
    const grid = action.payload;
    return {
      ...state,
      grid
    }
  }
};

const reducerMap = (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

const AppContextProvider = ({children}) => {
  let [state, dispatch] = useReducer(reducerMap, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;


export { AppContext,AppContextProvider,AppContextConsumer };
