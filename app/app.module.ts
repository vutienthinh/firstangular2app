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
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ViewChildComponent },
  { path: 'countries',      component: CountriesComponent },
  { path: 'lifecycle',      component: LifeCycleComponent },
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
	imports: [ BrowserModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ FirstAppComponent, CountriesComponent, CountryComponent, LifeCycleComponent, LifeCycleChildComponent, ViewChildComponent, EncapsulationEmulatedComponent, EncapsulationNativeComponent, EncapsulationNoneComponent, LifeCycleChildDirective ],
	bootstrap: [ FirstAppComponent ]
})
 
export class AppModule {
    
}