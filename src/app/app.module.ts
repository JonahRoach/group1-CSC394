import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { DiscussionboardComponent } from './component/discussionboard/discussionboard.component';
import { DPostComponent } from './component/dpost/dpost.component';
import { SubmissionComponent } from './component/submission/submission.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule} from '@angular/material/divider';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'


import { CKEditorModule} from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DiscussionboardComponent,
    DPostComponent,
    SubmissionComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
