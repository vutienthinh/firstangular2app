import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'country-app',
	moduleId: module.id,
	/*template: `<p [innerHtml]="'Name: '+ curCountry.name"></p>
				<p>Id: {{curCountry.id}}</p>`*/
	templateUrl: 'country.component.html',
	styleUrls: ['country.component.css']
})

export class CountryComponent {
	@Input()
	curCountry: any = {};

	@Output() countryUpdated = new EventEmitter();

	onChangeCountry(){
		this.countryUpdated.emit();
	}
}