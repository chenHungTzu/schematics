import * as from<%=classify(name)%>Reducer from '../reducers/<%= dasherize(name) %>.reducers';

export interface IndexState {
    example : from<%=classify(name)%>Reducer.State
}

/**
 *  this will extend root Reducer
 */
export interface State {
    root : IndexState
}

export const reducers = {
    example : from<%=classify(name)%>Reducer.reducer
}