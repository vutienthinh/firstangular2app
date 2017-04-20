import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'encapsulation-native',
	template: `<h4 class="encap-public">Encapsultion Native</h4>`,
	// The :host allows you to select and style the element hosting a shadow tree
	styles: ['.encap-native {color: green;} :host {text-transform: uppercase;color: yellow;}'],
	encapsulation: ViewEncapsulation.Native,
})

export class EncapsulationNativeComponent {
	
}