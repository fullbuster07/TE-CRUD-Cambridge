import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { Articles } from 'src/app/interfaces/interface-articles';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

declare var $: any;
import 'jquery';
import "jquery-ui"

@Component({
  selector: 'app-date-picker',
  template: `<p>{{label}} <input class="form-control" type="text" id="datepicker" autocomplete="off"></p> `,
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit, AfterViewInit, OnChanges{

  @Input() label : any;
  @Input() setDate?: any ;
  constructor(private datePipe: DatePipe){ }

  ngOnInit(): void {
 
  }
  ngOnChanges(changes: SimpleChanges): void {
    
    var datePipeString = this.datePipe.transform(this.setDate,'yyyy-MM-dd');
    $("#datepicker").val(datePipeString);
       
  }

  //Jquery Date Picker Function
  ngAfterViewInit(){
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
  }
    
}
