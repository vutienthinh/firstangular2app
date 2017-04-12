import { Component } from '@angular/core';

@Component({
    selector: 'first-app',
    template: `<h1>{{user?.firstname}} {{user.lastname}}</h1>
    			<h4 [textContent]="user.firstname"></h4>
    			<h4 bind-textContent="user.firstname"></h4>
    			<h4 [innerHtml]="user.firstname"></h4>
    			<h4 bind-innerHtml="user.firstname"></h4>`
    			/*<h4 bind-name="user.firstname"></h4> go wrong bc h4 tag doesn't have name attribute as well as property
    			<h4 [name]="user.firstname"></h4>`*/
})

export class FirstAppComponent {

	private user: any = {firstname: 'thinh', lastname: 'vu'};
    
}