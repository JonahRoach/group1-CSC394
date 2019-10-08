import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { DiscussionboardComponent } from './component/discussionboard/discussionboard.component';
import { SubmissionComponent } from './component/submission/submission.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'discussionboard', component: DiscussionboardComponent},
  {path:'submission', component:SubmissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
