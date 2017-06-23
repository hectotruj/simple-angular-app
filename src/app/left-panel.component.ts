import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from './global.service';
import { Information } from './information'

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {

  informationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private globalService: GlobalService) {
    this.createForm();
  }

  onSubmit() {
    this.globalService.create(new Information(
      this.informationForm.value['firstName'],
      this.informationForm.value['lastName'],
      this.informationForm.value['address'],
      this.informationForm.value['company']));
  }

  createForm() {
    this.informationForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      address: ['', [
        Validators.required
      ]],
      company: ''
    });
  }
}

