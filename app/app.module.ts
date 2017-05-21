import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstAppComponent } from './app.component';
import { CountriesComponent } from '../pages/countries/countries.component';
import { CountryComponent } from '../pages/country/country.component';
import { ViewChildComponent } from '../pages/viewchild/viewchild.component';
import { LifeCycleComponent } from '../pages/lifecycle/lifecycle.component';
import { LifeCycleChildComponent } from '../pages/lifecycle/lifecycle.child.component';
import { LifeCycleChildDirective } from '../pages/lifecycle/lifecycle.child.directive';
import { EncapsulationEmulatedComponent } from '../pages/encapsulation/encapsulation.emulated.component';
import { EncapsulationNativeComponent } from '../pages/encapsulation/encapsulation.native.component';
import { EncapsulationNoneComponent } from '../pages/encapsulation/encapsulation.none.component';
import { ObservableComponent } from '../pages/observable/observable.component';
import { FormAppComponent } from '../pages/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: 'viewchild', pathMatch: 'full' },
  { path: 'viewchild', component: ViewChildComponent },
  { path: 'countries/:id', component: CountriesComponent },
  { path: 'lifecycle/:id', component: LifeCycleComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'form', component: FormAppComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
	imports: [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
	declarations: [ FirstAppComponent, CountriesComponent, CountryComponent, LifeCycleComponent, LifeCycleChildComponent, ViewChildComponent, EncapsulationEmulatedComponent, EncapsulationNativeComponent, EncapsulationNoneComponent, LifeCycleChildDirective, ObservableComponent, FormAppComponent ],
	bootstrap: [ FirstAppComponent ]
})
 
export class AppModule {
    
}