import { Action } from '@ngrx/store';


export const EXAMPLE = '[<%= classify(name) %>] EXAMPLE';

export class Example implements Action {
    readonly type = EXAMPLE;
    constructor(public payload : any ) { }
}

