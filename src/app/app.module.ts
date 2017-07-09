import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import {AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { EditorComponent } from './editor/editor.component';

import { AceEditorComponent } from 'ng2-ace-editor';
import { AceEditorDirective } from 'ng2-ace-editor';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { LoadingComponent } from './loading/loading.component';

import { ProjectService } from './service/project.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigatorComponent,
    EditorComponent,
    AceEditorComponent,
    JsonEditorComponent,
    AceEditorDirective,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
