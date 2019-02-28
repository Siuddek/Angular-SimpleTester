import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CourseTileComponent } from './components/course-tile/course-tile.component';
import { AboutComponent } from './components/pages/about/about.component';
import { QuestionPageComponent } from './components/quiz/question-page/question-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AnswerSpaceComponent } from './components/quiz/answer-space/answer-space.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseTileComponent,
    AboutComponent,
    QuestionPageComponent,
    AnswerSpaceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
