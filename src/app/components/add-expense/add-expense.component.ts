import { Component, OnInit  } from '@angular/core';
import { Expense } from '../../models/expense';

import { ExpenseService } from '../../services/expense.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  //standalone: true,
  selector: 'app-add-expense',
  
  
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent implements OnInit{

  expense: Expense = new Expense();

  constructor(private _expenseService: ExpenseService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
        const id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
        if(id )
        this._expenseService.getExpense(id).subscribe(
          data => this.expense = data 
        )
    }
  }

  saveExpense() {
    this._expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this._router.navigateByUrl("/expenses");
      }
    )
  }

  deleteExpense(id: number) {
    this._expenseService.deleteExpense(id).subscribe(
      data => {
        console.log('deleted response', data);
        this._router.navigateByUrl('/expenses');
      }
    )
  }

}
