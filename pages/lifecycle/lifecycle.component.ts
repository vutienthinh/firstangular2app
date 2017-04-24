import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
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
	constructor(private route: ActivatedRoute) {

	}
	id: number;
	private sub: any;

	_countries: any[] = [{name:'VN',id: '1'},{name:'IN',id: '2'}];
	count: number = 0;

	doUpdateCountry() {
		// let name = 'US',
		// 	id = '8';
		// this._countries[0] = {name, id};
		this.count++;
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
		});
		console.log(`ngOnInit ${this['id']}`);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	
}