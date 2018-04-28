import { Component, OnInit, Output, EventEmitter, ViewContainerRef, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formContent = new EventEmitter<any>();
  form: FormGroup;
  colors = [
    { value: "#f44336", color: "red" },
    { value: "#ff8a80", color: "red-accent" },
    { value: "#e91e63", color: "pink" },
    { value: "#ff80ab", color: "pink-accent" },
    { value: "#9c27b0", color: "purple" },
    { value: "#ea80fc", color: "purple-accent" },
    { value: "#673ab7", color: "deep-purple" },
    { value: "#b388ff ", color: "deep-purple-accent" },
    { value: "#2196f3", color: "blue" },
    { value: "#82b1ff", color: "blue-accent" },
    { value: "#3f51b5", color: "indigo" },
    { value: "#8c9eff", color: "indigo-accent" },
    { value: "#00bcd4", color: "cyan" },
    { value: "#84ffff", color: "cyan-accent" },
    { value: "#03a9f4", color: "light-blue" },
    { value: "#80d8ff", color: "light-blue accent" },
    { value: "#4caf50", color: "green" },
    { value: "#b9f6ca", color: "green-accent" },
    { value: "#009688", color: "teal" },
    { value: "#a7ffeb", color: "teal-accent" },
    { value: "#cddc39", color: "lime" },
    { value: "#f4ff81", color: "lime-accent" },
    { value: "#8bc34a", color: "light-green" },
    { value: "#ccff90", color: "light-green-accent" },
    { value: "#ffc107", color: "amber" },
    { value: "#ffe57f", color: "amber-accent" },
    { value: "#ffeb3b", color: "yellow" },
    { value: "#ffff8d", color: "yellow-accent" },
    { value: "#ff5722", color: "deep-orange" },
    { value: "#ff9e80", color: "deep-orange-accent" },
    { value: "#ff9800", color: "orange" },
    { value: "#ffd180", color: "orange-accent" },
    { value: "#9e9e9e", color: "grey" },
    { value: "#795548", color: "brown" },
    { value: "#000000", color: "black" },
    { value: "#ffffff", color: "white" },
    { value: "#607d8b", color: "blue-grey" }
  ];
  submitValid = false;
  fileToUpload = null;
  constructor(private fb: FormBuilder, private vcr: ViewContainerRef) { }
  ngOnInit() {
    this.createForm();

  }
  createForm() {
    this.form = this.fb.group({
      name: new FormControl(null),
      logo: new FormControl(null),
      primaryColor: new FormControl(null),
      secondaryColor: new FormControl(null),
      checkIn: false,
      seats: false,
      bags: false
    });
  }
  onSubmit() {
    this.formContent.emit({ form: this.form.value, img: this.fileToUpload });
    this.submitValid = true;
  }
  removeDiv() {
    // Cosa chunga
    console.log($("input.select-dropdown")[0].value);
    let str: string = $("input.select-dropdown")[0].value;
    str = str.trim();
    str.substr(0, str.indexOf(' '));
    /*for (let i = 0; i < this.colors.length; i++) {
      if (str.includes(this.colors[i].color)){
        str = this.colors[i].color;
      }
    }*/
    let str2: string = $("input.select-dropdown")[1].value;
    str2 = str2.trim();
    str2.substr(0, str2.indexOf(' '));
    /*for (let i = 0; i < this.colors.length; i++) {
      if (str2.includes(this.colors[i].color)){
        str2 = this.colors[i].color;
      }
    }*/
    setTimeout(() => {
      $("input.select-dropdown")[0].value = str;
      $("input.select-dropdown")[1].value = str2;
    }, 10);
    console.log("primero:", str, "segundo:", str2);
  }
  handleFileInput(event) {
    let reader = new FileReader();
    if(event) {
      let file = event.item(0);
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileToUpload = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        };
      };
    }
    console.log(this.fileToUpload);
  }
} 