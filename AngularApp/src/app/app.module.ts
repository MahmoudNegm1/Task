import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { FormsModule } from '@angular/forms';
import { AppserverelementsComponent } from './appserverelements/appserverelements.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    AppserverelementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
