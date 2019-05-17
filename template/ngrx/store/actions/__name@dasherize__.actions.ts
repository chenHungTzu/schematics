import { Action } from '@ngrx/store';
import { <%=classify(name)%> } from '../../model/<%=dasherize(name).toLowerCase()%>.model'

export const DETAIL_ENTRY = '[<%= classify(name).toUpperCase() %>] DETAIL ENTRY';
export const LOAD_DETAIL = '[<%= classify(name).toUpperCase() %>] LOAD DETAIL';
export const LOAD_DETAIL_SUCCESS = '[<%= classify(name).toUpperCase() %>] LOAD DETAIL SUCCESS';
export const LOAD_DETAIL_FAILED = '[<%= classify(name).toUpperCase() %>] LOAD DETAIL FAILED';


export class detailEntryAction implements Action {
    readonly type = DETAIL_ENTRY;
    constructor(public payload : any ) { }
}

export class loadDetailAction implements Action {
    type: string = LOAD_DETAIL
    constructor(public payload : string){ }
}
export class loadDetailSuccessAction implements Action {
    type: string = LOAD_DETAIL_SUCCESS
    constructor(public payload : <%=classify(name)%>){ }
}
export class loadDetailFailedAction implements Action {
    type: string = LOAD_DETAIL_FAILED
    constructor(public payload : string){ }
}

export type Actions = detailEntryAction | 
                      loadDetailAction | 
                      loadDetailSuccessAction |
                      loadDetailFailedAction ;


