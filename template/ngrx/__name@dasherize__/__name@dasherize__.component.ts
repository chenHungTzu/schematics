import { Component, OnInit, ViewChild } from '@angular/core';
import { PtcAjaxOptions, PtcServerTableRequest } from 'ptc-server-table';
import { Store } from '@ngrx/store';
import { State as from<%=classify(name)%>Reducers } from "../store/reducers/"
import * as from<%=classify(name)%>Actions from "../store/actions/<%=dasherize(name) %>.actions"
import { <%=classify(name)%> } from 'src/app/<%=dasherize(name).toLowerCase()%>.model';

import { loggerClass, loggerAction } from 'src/app/shared/decorator/logger.decorator';
import { AuthorizeToDirective, AuthorizeToFunc } from 'src/app/shared/decorator/authorize.decorator';
import { ServerTableComponent } from 'src/app/shared/component/server-table/server-table.component';

/**
 * 功能名稱
 * - 於模組中的驗證 , 應用範圍如下 : 
 * - src/shared/component/authorize.directive.ts  (UI 權限判定)
 * - src/shared/decorator/authorize.decorator.ts  (component/function 權限判定)
 * - src/shared/service/authorize.decorator.ts    (權限驗證實作)
 */
export const featrue = '<%=classify(name)%>Component'

@Component({
  selector: 'app-<%=dasherize(name) %>',
  templateUrl: './<%=dasherize(name) %>.component.html',
  styleUrls: ['./<%=dasherize(name) %>.component.scss']
})
@loggerClass()
@AuthorizeToDirective(featrue)
export class <%=classify(name)%>Component implements OnInit {


  /**
   * 這邊使用套件為 ptc-server-table
   * 請參照以下網址 ： 
   * http://tfs2:8080/tfs/SD4-Collection/LibrarySD4/_git/ng-ptc-server-table?path=%2FREADME.md&version=GBmaster&_a=preview
   */
  @ViewChild('table') 
  table: ServerTableComponent;

  /**
   * 定義顯示之欄位 , 用途請參照以上網址
   */
  columns: any[] = [];

  /**
   * 定義ajax欄位 , 用途請參照以上網址
   */
  ajax: PtcAjaxOptions = new PtcAjaxOptions();

  /**
   * 這邊為畫面上的查詢條件 , 預設為建立之物件
   */
  <%=classify(name).toLowerCase()%> = new <%=classify(name)%>();

  
  constructor(private store: Store<from<%=classify(name)%>Reducers>) {

    this.ajax.url = '<%=url1%>';
    this.ajax.method = 'POST';
    this.columns = [
        // 這邊對定義欄位做初始化
    ]

  }

  @loggerAction()
  @AuthorizeToFunc()
  ngOnInit(): void {
  
  }

  /**
   * 將物件傳出之前 , 加工 payload 送回server
   */
  @loggerAction()
  @AuthorizeToFunc()
  critiria($event: PtcServerTableRequest<any>) {
    $event.criteria = this.<%=classify(name).toLowerCase()%>
  }

  /**
   * 按鈕按下查詢,渲染table
   */
  @loggerAction()
  @AuthorizeToFunc(featrue, ['read'])
  btnRender($event : any) {
    this.table.render($event)  
  }

  /**
   * 按鈕按下查詢
   */
  @loggerAction()
  @AuthorizeToFunc(featrue, ['add'])
  btnAdd($event : any){

  }

  /**
   * 當ptc server table 按下刪除
   */
  @loggerAction()
  @AuthorizeToFunc(featrue, ['delete'])
  onBtnDelete($event : any) {
    this.store.dispatch(new from<%=classify(name)%>Actions.loadDetailAction('param'));
  }

  /**
   * 當ptc server table 按下查詢
   */
  @loggerAction()
  @AuthorizeToFunc(featrue, ['read'])
  onBtnSearch($event : any) {
    this.store.dispatch(new from<%=classify(name)%>Actions.loadDetailAction('param'));

  }

  /**
   * 當ptc server table 按下編輯
   */
  @loggerAction()
  @AuthorizeToFunc(featrue, ['edit'])
  onBtnEdit($event : any) {
    this.store.dispatch(new from<%=classify(name)%>Actions.loadDetailAction('param'));

  }
}


