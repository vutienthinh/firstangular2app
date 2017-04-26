import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Component({
	selector: 'observable-app',
	moduleId: module.id,
	templateUrl: 'observable.component.html',
	styleUrls: ['observable.component.css'],
})

export class ObservableComponent {
	observable: Observable<Array<any>>;
	constructor() {

		/*this.observable.([1,2,3,4,5])
			.map(i => i * 4)
			.subscribe(i => console.log(i));*/
	}
	
}