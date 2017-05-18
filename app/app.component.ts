import { Component } from '@angular/core';
import { CountriesComponent } from '../pages/countries/countries.component';
import { ViewChildComponent } from '../pages/viewchild/viewchild.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'root-app',
    template: `<nav>
                    <a routerLink="/" routerLinkActive="active">Home</a>
                    <a routerLink="/countries/1" routerLinkActive="active">Countries</a>
                    <a routerLink="/lifecycle/2" routerLinkActive="active">Lifecycle</a>
                    <a routerLink="/observable" routerLinkActive="active">Observable</a>
                </nav>
                <router-outlet></router-outlet>`,
    //template: `	<viewchild-app><countries-app></countries-app></viewchild-app> `
               /* <countries-app></countries-app>
    			<h1>{{user?.firstname}} {{user.lastname}}</h1>
    			<h4 textContent="{{user.firstname}}"></h4>
    			<h4 [textContent]="user.firstname"></h4>
    			<h4 bind-textContent="user.firstname"></h4>
    			<h4 innerHtml="FirstName: {{getInfo().firstname}}"></h4>
    			<h4 [innerHtml]="'FirstName: ' + getInfo().firstname"></h4>
    			<h4 [innerHtml]="'Age: ' + getInfo().age"></h4>
    			<h4 bind-innerHtml="user.firstname"></h4>
    			<img [src]="user.url">,*/
    			/*<h4 bind-name="user.firstname"></h4> go wrong bc h4 tag doesn't have name attribute as well as property
    			<h4 [name]="user.firstname"></h4>`
    			<img src={{user.avatar.url}}> go wrong bc browser will try to fetch the image and read "src" ASAP,
    			 the var can come from HTML over time */
    directives: [CountriesComponent, ViewChildComponent, ROUTER_DIRECTIVES]
})

export class FirstAppComponent {

	private user: any = {firstname: 'thinh', lastname: 'vu', url: 'https://angular.io/resources/images/logos/standard/logo-nav.png'};

    private getInfo() {
        //union type
        /*type mixtype = number | string;
        let mix: mixtype = 2;
        mix = 'hai';
        alert(mix);*/

    	/*let firstname = 'ha';//this.user.firstname;
    	let lastname = this.user.lastname;*/
    	let { firstname = 'defaultFirstName', lastname = 'defaultLastName', age = '22'} = this.user;
    	/*let {firstname: fname, lastname: lname} = this.user;
    	return { fname, lname }; */
    	return { firstname, lastname, age };
    }

}