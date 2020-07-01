import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-your-flights',
  templateUrl: './book-your-flights.component.html',
})
export class BookYourFlightsComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      from: ['', [
        Validators.required,
      ]],
    });
  }

  get from(): AbstractControl {
    return this.from.value();
  }

}
