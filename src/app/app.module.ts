import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { AddStructureComponent } from './add-structure/add-structure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructureByIdComponent } from './structure-by-id/structure-by-id.component';

const appRoutes: Routes = [
  { path: 'structures', component: StructureListComponent },
  { path: 'add-structure', component: AddStructureComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'structure/:id', component: StructureByIdComponent },
  { path: '', component: StructureListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    StructureListComponent,
    AddStructureComponent,
    DashboardComponent,
    StructureByIdComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
