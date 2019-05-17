import * as from<%=classify(name)%>Action from '../actions/<%= dasherize(name) %>.actions';
import {<%=classify(name)%>} from '../../model/<%=dasherize(name).toLowerCase()%>.model';

export interface State{
	detail : <%=classify(name)%>
}

export const initialState : State = {
	detail : null
}

export function reducer(state :State, action: from<%=classify(name)%>Action.Actions) {
	switch (action.type) {
		case from<%=classify(name)%>Action.LOAD_DETAIL_SUCCESS:
			return {
				...state ,
				detail : action.payload
			};
		default:
			return state;
	}
}