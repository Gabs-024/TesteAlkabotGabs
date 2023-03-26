import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';


@NgModule({
declarations: [
    NavbarComponent
],
imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule
],
exports: [
    NavbarComponent
]
})
export class NavbarModule { }
