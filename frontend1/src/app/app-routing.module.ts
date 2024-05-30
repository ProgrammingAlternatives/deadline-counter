import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeadlineCounterComponent } from './components/deadline-counter/deadline-counter.component';


const routes: Routes = [
  {path: "deadline-counter", component: DeadlineCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
