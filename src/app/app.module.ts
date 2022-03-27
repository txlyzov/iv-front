import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NoteComponent } from './components/note/note.component';
import { TextareaModule } from './components/textarea/textarea-module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteEditorComponent,
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
