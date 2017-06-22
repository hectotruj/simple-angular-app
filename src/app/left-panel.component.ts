import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {

  informationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }



  createForm() {
    this.informationForm = this.formBuilder.group({
      firstName: ['', [
                          Validators.required,
                          Validators.minLength(4)
                        ]
                  ],
      lastName: '',
      address: '',
      company: ''
    });
  }
}

