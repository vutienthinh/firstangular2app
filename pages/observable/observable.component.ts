import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Component({
	selector: 'observable-app',
	moduleId: module.id,
	templateUrl: 'observable.component.html',
	styleUrls: ['observable.component.css'],
})

export class ObservableComponent {
	observeData: Observable<Array<any>>;
	constructor() {
		this.observeData = new Observable(observer => {
			let count = 0;

			setInterval(() => {
				if(count < 6) {
					observer.next(43434);
					if(count == 3) {
						observer.error(new Error('ERROR1'));
					}
					else if(count == 5) {
						observer.complete();
					}
					count++;
				}
			}, 5000);
		})
		this.observeData.subscribe(
			data => {
				console.log(`data: ${data}`);
			},
			error => {
				console.log(`error: ${error}`);
			},
			() => {
				console.log(`complete`);
			}
		)
		/*this.observable.([1,2,3,4,5])
			.map(i => i * 4)
			.subscribe(i => console.log(i));*/
	}
	
}