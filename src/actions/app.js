export const  
  INCREMENT='increment',
  GRID_INITIALIZE='grid-initialize',
  GET_DATA ='get-data',
  REQUEST = 'request',
  SUCCESS='succes',
  ERROR='error',
  INITDATE='init-date',
  ENDDATE='end-date';
  


export function increment() {
  return {
    type: INCREMENT,
  };
}

export function gridInit( payload ) {
  return {
    type: GRID_INITIALIZE,
    payload
  };
}

export function getAuth( arg ) {
  return {
    type: GET_DATA,
    payload:{ arg }
  };
}
