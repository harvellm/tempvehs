import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RolesComponent } from './components/roles/roles.component';
import { LocationsComponent } from './components/locations/locations.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RolesComponent,
    LocationsComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
