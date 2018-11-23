import { NgModule } from '@angular/core';   
import { CommonModule } from '@angular/common'; 
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

@NgModule({
    imports: [
        CommonModule,
        <%= classify(name) %>RoutingModule
    ],
    declarations: [
        <%= classify(name) %>Component
    ]
})
export class <%= classify(name) %>Module { }