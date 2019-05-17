import { Component, OnInit, OnDestroy } from '@angular/core';
import { <%=classify(name)%> } from 'src/app/<%=dasherize(name).toLowerCase()%>.model';

import { State as from<%=classify(name)%>Reducers } from "../store/reducers/"
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export const featrue = '<%=classify(name)%>DetailComponent'

@Component({
  selector: '<%=dasherize(name) %>-detail',
  templateUrl: './<%=dasherize(name) %>-detail.component.html',
  styleUrls: ['./<%=dasherize(name) %>-detail.component.scss']
})
export class <%=classify(name)%>DetailComponent implements OnInit, OnDestroy {


  <%=classify(name).toLowerCase()%>$: Subscription
  <%=classify(name).toLowerCase()%>: <%=classify(name)%> = new <%=classify(name)%>();

  constructor(private store: Store<from<%=classify(name)%>Reducers>) {

  }
  ngOnInit() {
    this.<%=classify(name).toLowerCase()%>$ = this.store
      .select((state: from<%=classify(name)%>Reducers) => state.master.<%=camelize(name)%>.detail)
      .pipe(filter(x => x != null))
      .subscribe(<%=classify(name).toLowerCase()%> => {
        this.<%=classify(name).toLowerCase()%> = { ...<%=classify(name).toLowerCase()%> };
      })
  }

  ngOnDestroy() {
    this.<%=classify(name).toLowerCase()%>$ && this.<%=classify(name).toLowerCase()%>$.unsubscribe();
  }



}
