import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './tasks/task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'new', component: TaskFormComponent},
  {path: 'edit/:id', component: TaskFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
