import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
	selector: 'lifecycle-child-app',
	moduleId: module.id,
	templateUrl: 'lifecycle.child.component.html',
	//styleUrls: ['lifecycle.component.css'],
})

export class LifeCycleChildComponent {
	@Input() curCountry: any;
	@Input() count: number;

	ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnChanges', changes);
	}

	ngOnInit() {
		console.log('ngOnInit');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy');
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