import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { ExpenseService } from './services/expense.service';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',

  standalone: true, 
  imports: [
    RouterModule,
    /* AboutComponent,
    HomeComponent,
    AboutItemComponent,
    AboutHomeComponent */
    
    
    RouterOutlet,
    CommonModule,
    RouterOutlet,
   // AddExpenseComponent,
    //ListExpensesComponent,
    FormsModule
  ],
  providers: [ExpenseService],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-angular';

  posts:any;
  
    constructor(private service:ExpenseService) {}
  
    ngOnInit() {
  
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
