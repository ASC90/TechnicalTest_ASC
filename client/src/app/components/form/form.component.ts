import { Component, OnInit, Output, EventEmitter, ViewContainerRef, ElementRef, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { CrudServiceService } from '../../services/crud-service.service';
import { Airline } from '../../Models/airline';
declare var $: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() formContent = new EventEmitter<any>();
  @Input() id: string;
  updateableObject: Airline;
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
  constructor(private fb: FormBuilder, private vcr: ViewContainerRef, private service: CrudServiceService) { }
  ngOnInit() {
    if (this.id != null) {
      this.service.getAnAirline(this.id).subscribe(res => {
        console.log(res);
        this.updateableObject = res;
        this.createForm();
      });
    } else {
      this.createForm();
    }

  }
  createForm() {
    this.form = this.fb.group({
      name: new FormControl(this.updateableObject ? this.updateableObject.name : null),
      logo: new FormControl(this.updateableObject ? this.updateableObject.logo : null),
      primaryColor: new FormControl(this.updateableObject ? this.updateableObject.primaryColor : null),
      secondaryColor: new FormControl(this.updateableObject ? this.updateableObject.secondaryColor : null),
      checkIn: new FormControl(this.updateableObject ? this.updateableObject.checkIn : false),
      seats: new FormControl(this.updateableObject ? this.updateableObject.seats : false),
      bags: new FormControl(this.updateableObject ? this.updateableObject.bags : false)
    });
    setTimeout(() => {
      this.removeDiv(true);
    }, 100);
  }
  onSubmit() {
    this.formContent.emit({ form: this.form.value, img: this.fileToUpload, id: this.id });
    this.submitValid = true;
  }
  removeDiv(firstTime?: boolean) {
    // Cosa chunga
    let str: string = $("input.select-dropdown")[0].value;
    str = str.trim();
    if (firstTime) {
      str = str.substr(0, str.indexOf(' '));
    } else {
      str.substr(0, str.indexOf(' '));
    }
    
    let str2: string = $("input.select-dropdown")[1].value;
    str2 = str2.trim();
    if (firstTime) {
      str2 = str2.substr(0, str2.indexOf(' '));
    } else {
      str2.substr(0, str2.indexOf(' '));
    }
    setTimeout(() => {
      $("input.select-dropdown")[0].value = str;
      $("input.select-dropdown")[1].value = str2;
    }, 10);
    console.log("primero:", str, "segundo:", str2);
  }
  handleFileInput(event) {
    let reader = new FileReader();
    if (event) {
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