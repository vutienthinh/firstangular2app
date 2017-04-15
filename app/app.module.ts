import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FirstAppComponent } from './app.component';
import { CountriesComponent } from '../pages/countries/countries.component';
import { CountryComponent } from '../pages/country/country.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ FirstAppComponent, CountriesComponent, CountryComponent ],
	bootstrap: [ FirstAppComponent ]
})
 
export class AppModule {
    
}