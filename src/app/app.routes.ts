import { Routes } from '@angular/router';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    //{ path: '', component: ListExpensesComponent },
    // { path: '/expenses', component: AddExpenseComponent }
    { path: 'home', component: HomeComponent },
    {path: 'expenses', component: ListExpensesComponent},
  {path: 'addexpense', component: AddExpenseComponent},
  {path: 'editexpense/:id', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'}
];
