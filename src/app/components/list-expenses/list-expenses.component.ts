import { Component, OnInit  } from '@angular/core';

import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense.service';

import {NgFor, NgForOf} from "@angular/common";


@Component({
  standalone: true,
  selector: 'app-list-expenses',
  imports: [
        NgForOf
    ],
  
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.css'
})
export class ListExpensesComponent implements OnInit{

  expenses: Expense[] = [];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.listExpenses();
  }

  listExpenses() {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = data
    )
  }

}
