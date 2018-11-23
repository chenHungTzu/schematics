import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import * as <%=classify(name)%>Action from './<%= dasherize(name) %>.actions';

@Injectable()
export class <%=classify(name)%>Effects {
    constructor(
        private http: Http,
        private actions$: <%=classify(name)%>Action
    ) { }

    @Effect({
        dispatch: false
    })
    example$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(<%=classify(name)%>Action.EXAMPLE)
        // Map the payload into JSON to use as the request body
        .map(action => console.log(action))

}