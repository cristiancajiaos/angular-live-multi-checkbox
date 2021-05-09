import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: "app-foo",
  templateUrl: "./foo.component.html",
  styleUrls: ["./foo.component.scss"],
})
export class FooComponent implements OnInit {
  form: FormGroup;

  elements: Array<any> = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "5", value: 5 },
    { name: "10", value: 10 },
    { name: "15", value: 15 },
    { name: "25", value: 25 },
    { name: "50", value: 50 }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([]),
    });
  }

  ngOnInit() { }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }

  }

  submit() {
    console.log(this.form);
  }
}
