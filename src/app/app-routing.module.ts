import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseTileComponent } from './components/course-tile/course-tile.component';
import { AboutComponent } from './components/pages/about/about.component';
import { QuestionPageComponent } from './components/quiz/question-page/question-page.component';

const routes: Routes = [
  {path: '', component: CourseTileComponent},
  {path: 'about', component: AboutComponent},
  {path: 'questionPage/:courseName', component: QuestionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
