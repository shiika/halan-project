import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TextRepresentationComponent } from './text-representation/text-representation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TextRepresentationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
