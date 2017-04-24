import { Directive, Input, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[lifecycleChild]',
	inputs:['curCountry'],
	//moduleId: module.id,
	//templateUrl: 'lifecycle.child.component.html',
	//styleUrls: ['lifecycle.component.css'],

})

export class LifeCycleChildDirective {
	//@Input() curCountry: any;

	ngOnChanges(changes: SimpleChanges) {
		console.log(`ngOnChanges Directive`, changes);
	}

	ngOnInit() {
		console.log('ngOnInit Directive');
	}

	ngOnDestroy() {
		console.log('ngOnDestroy Directive');
	}

	ngDoCheck() {
		console.log('ngDoCheck Directive');
	}

	ngAfterContentInit() {
		console.log('ngAfterContentInit Directive');
	}
	
	ngAfterContentChecked() {
		console.log('ngAfterContentChecked Directive');
	}

	ngAfterViewInit() {
		console.log('ngAfterViewInit Directive');
	}

	ngAfterViewChecked() {
		console.log('ngAfterViewChecked Directive');
	}
}