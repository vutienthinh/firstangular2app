import { Component } from '@angular/core';
import { LifeCycleChildComponent } from '../lifecycle/lifecycle.child.component';
import { LifeCycleChildDirective } from '../lifecycle/lifecycle.child.directive';

@Component({
	selector: 'lifecycle-app',
	moduleId: module.id,
	templateUrl: 'lifecycle.component.html',
	styleUrls: ['lifecycle.component.css'],
	directives: [LifeCycleChildComponent, LifeCycleChildDirective]
})

export class LifeCycleComponent {
	_countries: any[] = [{name:'VN',id: '1'},{name:'IN',id: '2'}];

	doUpdateCountry() {
		let name = 'US',
			id = '8';
		this._countries[0] = {name, id};
	}
	
}