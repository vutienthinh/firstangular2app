import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'encapsulation-emulated',
	template: `<h4 class="encap-public encap-emulated encap-none">Encapsultion Emulated</h4>`,
	styles: ['.encap-public {font-weight: bold;} .encap-emulated {color: blue;}'],
	encapsulation: ViewEncapsulation.Emulated,
})

export class EncapsulationEmulatedComponent {
	
}