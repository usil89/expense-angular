import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';



const routers: Routes = [
  {path: 'expenses', component: ListExpensesComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'editexpense/:id', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    //AppComponent,
    //ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    
    HttpClientModule,
    FormsModule,
    //ListExpensesComponent,
    //AddExpenseComponent,
    RouterModule.forRoot(routers)
  ],
  providers: [HttpClientModule,RouterLink],
  //bootstrap: [AppComponent],
  bootstrap: []
})
export class AppModule { }