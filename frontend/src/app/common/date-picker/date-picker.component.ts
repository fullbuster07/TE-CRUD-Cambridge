import { Component, OnInit, AfterViewInit, Input  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Articles } from 'src/app/interfaces/interface-articles';
import { Router } from '@angular/router';
declare var $: any;
import 'jquery';
import "jquery-ui"

@Component({
  selector: 'app-date-picker',
  template: `<p>{{label}} <input class="form-control" type="text" id="datepicker" autocomplete="off"></p> `,
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, AfterViewInit{

  @Input() label : any;
  constructor(){ }

  ngOnInit(): void {
  }


  onDateChange(date: any) {
    console.log( date)
  }
  //Jquery Date Picker Function
  ngAfterViewInit(){
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
  }
    
}
