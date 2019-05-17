import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { State as from<%=classify(name) %>Reducer } from '../reducers'
import * as from<%=classify(name)%>Action from '../actions/<%= dasherize(name) %>.actions';

import { exhaustMap, tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of, concat } from 'rxjs';


import { <%=classify(name)%> } from '../../model/<%=dasherize(name).toLowerCase()%>.model'

// customer service
import { HttpService } from 'src/app/shared/service/http.service';

//customer object
import { AspnetJsonResult, AspnetJsonResultBase } from 'src/app/model/aspnet-json-result';

// customer ngrx obsv
import { _httpflow$, _isHttpSuccess$ } from 'src/app/shared/ngrx/http.ngrx';
import { _unLoading$, _loadingWork$, _loading$ } from 'src/app/shared/ngrx/loading.ngrx'
import { _failed$, _success$ } from 'src/app/shared/ngrx/alert.ngrx'
import { _entry$ } from 'src/app/shared/ngrx/common.ngrx';
import { _route$ } from 'src/app/shared/ngrx/route.ngrx';


@Injectable()
export class <%=classify(name)%>Effects {
    constructor(private http: HttpService,
        private actions$: Actions,
        private store: Store <from<%=classify(name) %>Reducer>) { }


    @Effect()
    loadDetail$ = _entry$<string>(this.actions$,
        from<%=classify(name)%>Action.LOAD_DETAIL)
        .pipe(
            exhaustMap((payload: string) => {

                // 主要要做的事情 , 這邊是透過 http client 撈取資料
                const retrieve$ = this.http.get<AspnetJsonResult<<%=classify(name) %>> ('<%=url2%>', {});

                // 成功時將呼叫 loadDetailSuccess$ 進行後續行為
                const handleSuccess = (result: AspnetJsonResult<<%=classify(name) %>>) =>
                    of(new from<%=classify(name)%>Action.loadDetailSuccessAction(result.element));

                // 失敗時將呼叫 loadDetailFailed$ 進行後續行為
                const handleFailed = (result: AspnetJsonResult<<%=classify(name)%>>) =>
                    of(new from<%=classify(name)%>Action.loadDetailFailedAction(result.message));

                // 判斷是否成功或是失敗
                const consider = (result: AspnetJsonResultBase) => result.isSuccess;

                // 實際進行http 行為
                const work$ = _httpflow$(handleSuccess, handleFailed, retrieve$, consider)

                return _loadingWork$(work$);
            })
    
        )   

    @Effect()
    loadDetailSuccess$ = _entry$<<%=classify(name)%>>(this.actions$,
        from<%=classify(name)%>Action.LOAD_DETAIL_SUCCESS).pipe(
            exhaustMap(payload => {
                return concat(_success$('success'), _route$('./url', {}))
            })
        )

    @Effect()
    loadDetailFailed$ = _entry$<string>(this.actions$,
        from<%=classify(name)%>Action.LOAD_DETAIL_FAILED).pipe(
            exhaustMap(payload => {
                return _failed$(payload)
            })
        )
    
}