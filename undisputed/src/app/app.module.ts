import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WODComponent } from './wod/wod.component';
import { IMTComponent } from './imt/imt.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { WodAdminComponent } from './Shared/wod-admin/wod-admin.component';
import { ImtListItemsComponent } from './imt/imt-list-items/imt-list-items.component';
import { FormsModule }   from '@angular/forms';

const route: Routes =  [
  { path: 'movement', component: IMTComponent },
  { path: 'wod', component: WODComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WODComponent,
    NavComponent,
    IMTComponent,
    WodAdminComponent,
    ImtListItemsComponent],

  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
