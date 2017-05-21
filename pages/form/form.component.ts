import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'form-app',
	moduleId: module.id,
	templateUrl: 'form.component.html',
	styleUrls: ['form.component.css'],
	//directives: [CountryComponent, CountriesComponent, EncapsulationEmulatedComponent, EncapsulationNativeComponent, EncapsulationNoneComponent]
})

export class FormAppComponent {
	/*userForm: ControlGroup;
  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      username: fb.control(''),
      password: fb.control('')
    });
  }
  register() {
    console.log(this.userForm.value);
  }*/
	complexForm : FormGroup;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder){
    // Here we are using the FormBuilder to build out our form.
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'firstName' : ['', Validators.required],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    })
  }

  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
	
}