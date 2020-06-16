import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CasesComponent} from './components/cases/cases.component';
import {CasesDetailsComponent} from './components/cases-details/cases-details.component';
import {AddCasesComponent} from './components/add-cases/add-cases.component';
import {EditCasesComponent} from './components/edit-cases/edit-cases.component';
import {CasesStatComponent} from './components/cases-stat/cases-stat.component';

//=======================================================
//https://www.djamware.com/post/5e435e84a8d0ef4300ffc5f6/angular-9-tutorial-learn-to-build-a-crud-angular-app-quickly#new-angular-9-app
//=======================================================

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CasesDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
