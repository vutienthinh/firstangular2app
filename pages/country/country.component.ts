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
	@Input() curCountry: any = {};

	@Output() countryUpdated = new EventEmitter();

	@Input() count: number = 0;

	@Output() countChange = new EventEmitter<number>();

	onChangeCountry(name, age){
		let counObj = {name, age};
		this.countryUpdated.emit(counObj);
	}

	increasement = (() => {
		this.count++;
		// IMPORTANT: dont forget to emit value
		this.countChange.emit(this.count);
	})
}