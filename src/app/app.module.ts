import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SortByNamePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
