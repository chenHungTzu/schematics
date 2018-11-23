import * as from<%=classify(name)%>Action from '../actions/<%= dasherize(name) %>.actions';


export interface State{

}

export const initialState : State = {

}

export function reducer(state :State, action: from<%=classify(name)%>Action.Actions) {
	switch (action.type) {
		case from<%=classify(name)%>Action.EXAMPLE:
			return state;
		default:
			return state;
	}
}