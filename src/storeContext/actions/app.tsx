import { createAction } from "@reduxjs/toolkit";

export enum ActionTypes {
  GRID_INITIALIZE = 'grid-initialize',
  INCREMENT = 'increment-ass',
}

export const increment = createAction(ActionTypes.INCREMENT)
export const gridInit = createAction(ActionTypes.GRID_INITIALIZE)
// export const getAuth = createAction<any>(ActionTypes.GET_DATA)
export type ActionsApp = ReturnType<typeof increment| typeof gridInit> 