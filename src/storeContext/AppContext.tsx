import React, { createContext, Dispatch, ReactNode, ReducerAction, ReducerState, useReducer } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';
import { ActionsApp, ActionTypes, increment } from './actions/app'
import { initialStateType } from './AppContextTypes';

const initialState: initialStateType = {
  count:0,
  loading: false,
  grid:null,
  error: null,
  payload: null,
  status: null,
  response: null,
};
const AppContext = createContext<{state: initialStateType; dispatch: React.Dispatch<ActionsApp>; }>({state: initialState, dispatch: () => null});

type ActionsMapTypes = Record<ActionTypes, (state: initialStateType, action: PayloadAction) => initialStateType> 

const actionsMap: ActionsMapTypes = {
  [ActionTypes.GRID_INITIALIZE]: (state: any) => {
    // const grid = action.payload ? action.payload : null;
    return {
      ...state,
      grid:99
    }
  },
  [ActionTypes.INCREMENT]: (state) => {
    const count = state.count++;
    return {
      ...state,
      count
    }
  },
};
type MyType = {
  [k in ActionTypes]: any;
};
type P = keyof MyType;

const reducerMap = (state = initialState, action: PayloadAction):initialStateType => {
  const fn = actionsMap[action.type as P];
  return fn && fn(state, action);
}

export type AppDispatch = typeof AppContext;

const AppContextProvider = ({children}: {children: ReactNode}) => {
  let [state, dispatch] = useReducer(reducerMap, initialState) as unknown as [initialStateType, React.Dispatch<ActionsApp>];
  let value = { state, dispatch };
  dispatch(increment())
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;


export { AppContext,AppContextProvider,AppContextConsumer };
