import { Directive, Input, SimpleChanges, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[lifecycleChild]',
	inputs:['curCountry'],
	//moduleId: module.id,
	//templateUrl: 'lifecycle.child.component.html',
	//styleUrls: ['lifecycle.component.css'],

})

export class LifeCycleChildDirective {
	//@Input() curCountry: any;
	private hostElm: any = {};
	constructor(private elementRef: ElementRef) {
		console.log(this.elementRef.nativeElement);
		this.hostElm = this.elementRef.nativeElement;
		this.hostElm.style.backgroundColor = 'green';
		this.hostElm.style.textTransform = 'capitalize';
		let parent = this.hostElm.parentElement;
		let clonedElm = this.hostElm.cloneNode(true);
		clonedElm.innerHTML = 'This is clone directive';
		parent.appendChild(clonedElm);
	}

	@HostListener('mouseenter') handleMouseEnter() {
		this.hostElm.style.backgroundColor = 'red';
	}

	@HostListener('mouseleave') handleMouseLeave() {
		this.hostElm.style.backgroundColor = 'green';
	}

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