import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import * as from<%=classify(name)%>Action from '../actions/<%= dasherize(name) %>.actions';

@Injectable()
export class <%=classify(name)%>Effects {
    constructor(
        private http: Http,
        private actions$: Actions
    ) { }

    @Effect({dispatch: false})
    example$ = this.actions$
        .ofType(from<%=classify(name)%>Action.EXAMPLE)
        .map(action => console.log(action))

}