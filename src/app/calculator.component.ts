import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from './global.service';
import { Information } from './information'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  salaryForm: FormGroup;
  salaries: number;

  constructor(private formBuilder: FormBuilder, private globalService: GlobalService) {
    this.createForm();

    this.globalService.salaries$.subscribe(
      salaries => {
        this.salaries = salaries;
      }
    );
  }

  onSubmit() {
    this.globalService.findAllSalaries(
      this.salaryForm.value['company']);
  }

  createForm() {
    this.salaryForm = this.formBuilder.group({
      company: ''
    });
  }
}
