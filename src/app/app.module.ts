import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { AsideComponent } from './componente/aside/aside.component';
import { WorksComponent } from './componente/works/works.component';
import { WorkItemComponent } from './componente/work-item/work-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    WorksComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
