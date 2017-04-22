import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'country-app',
	moduleId: module.id,
	/*template: `<p [innerHtml]="'Name: '+ curCountry.name"></p>
				<p>Id: {{curCountry.id}}</p>`*/
	templateUrl: 'country.component.html',
	styleUrls: ['country.component.css'],
	//inputs: ['transferedText: testInput'],
	//inputs: ['transferedText'],
	outputs: ['countChange']
})

export class CountryComponent {
	//transferedText: string = '';
	constructor() {
	}
	/*ngDoCheck() {
		console.log(this.transferedText, this.curCountry);
	}*/

	// 2 property have different name
	//@Input('testInput') transferedText: string;
	// IMPORTANT : watch property change of this intance componnet
	/*set transferedText(value) {
		console.log(value);
	}*/

	// if 2 prop have same name
	@Input()
	set transferedText(value) {
		console.log(value);
	}

	@Input() curCountry: any = {};

	@Output() countryUpdated = new EventEmitter();

	@Input() count: number = 0;

	//@Output() countChange = new EventEmitter<number>();
	countChange = new EventEmitter<number>();

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