import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'encapsulation-none',
	template: `<h4 class="encap-public encap-none">Encapsultion None</h4>`,
	styles: ['.encap-none {color: red;}'],
	encapsulation: ViewEncapsulation.None,
})

export class EncapsulationNoneComponent {
	
}