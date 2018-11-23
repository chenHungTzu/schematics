import { ActionReducer } from '@ngrx/store';
import * as  <%=classify(name)%>Action from './<%= dasherize(name) %>.actions';



export function reducer(state : {}, action: <%=classify(name)%>Action) {
	switch (action.type) {
		case <%=classify(name)%>Action.EXAMPLE:
			return state;
		default:
			return state;
	}
}