import { Component, ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { CountryComponent } from '../country/country.component';
import { CountriesComponent } from '../countries/countries.component';

@Component({
	selector: 'viewchild-app',
	moduleId: module.id,
	templateUrl: 'viewchild.component.html',
	styleUrls: ['viewchild.component.css'],
	directives: [CountryComponent, CountriesComponent]
})

export class ViewChildComponent {
	_countries: any[] = [{name:'VN',id: '1'},{name:'IN',id: '2'}];
	@ViewChild(CountryComponent) childViewElm: CountryComponent;
	@ContentChild(CountriesComponent) childContentElm: CountriesComponent;
	//@ViewChildren(CountryComponent) childrenComponent: QueryList<CountryComponent>;

	doIncrease = (() => {
		this.childViewElm.increasement();
	});

	doDecrease = (() => {
		this.childContentElm.decreasement();
	});
}