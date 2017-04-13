import { Component, Input } from '@angular/core';

@Component({
	selector: 'country-app',
	template: `<p [innerHtml]="'Name: '+ curCountry.name"></p>
				<p>Id: {{curCountry.id}}</p>`
	//templateUrl: 'country-component.html'
})

export class CountryComponent {
	@Input()
	curCountry: any = {};
}