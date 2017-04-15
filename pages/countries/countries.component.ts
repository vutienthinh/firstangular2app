import { Component, Input} from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { Country } from '../../interface/country.interface';

@Component({
	selector: 'countries-app',
	moduleId: module.id,
	//templateUrl: 'pages/countries/countries.component.html', --> absolute reference
	/*template: `<div *ngFor="let count of _countries">
				<country-app [curCountry]="count"></country-app>
			</div>`,*/
	templateUrl: 'countries.component.html',
	styleUrls: ['countries.component.css'],
	directives: [CountryComponent]
})

export class CountriesComponent implements Country {
	_countries: any[] = [{name:'VN',id: '1'},{name:'IN',id: '2'}];
	constructor(){
		this.handleChangeCountry(this.run);
	}
	/*handleChangeCountry = () => {
		alert(11);
	}*/
	handleChangeCountry(coun: Country): void {
		console.log(coun);
		coun.displayMessage('hehe');
		//return coun;
	}
		run = {
			displayMessage:((mes) => {
				alert(mes)
			})
		};
}