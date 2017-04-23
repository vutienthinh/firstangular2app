import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'lifecycle-child-app',
	moduleId: module.id,
	templateUrl: 'lifecycle.child.component.html',
	//styleUrls: ['lifecycle.component.css'],
})

export class LifeCycleChildComponent {
	@Input() curCountry: any;

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges', changes);
	}

	ngOnInit() {
		console.log('ngOnInit');
	}

	ngOnDetroy() {
		console.log('ngOnDetroy');
	}

	ngDoCheck() {
		console.log('ngDoCheck');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit');
	}
	
	ngAfterContentChecked() {
		console.log('ngAfterContentChecked');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked');
	}
	
}