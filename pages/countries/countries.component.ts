import { Component, Input} from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
	selector: 'countries-app',
	template: `<div *ngFor="let count of _countries">
				<country-app [curCountry]="count"></country-app>
			</div>`,
	//templateUrl: 'countries-component.html',
	directives: [CountryComponent]
})

export class CountriesComponent {
	_countries: any[] = [{name:'VN',id: '1'},{name:'IN',id: '2'}];
}