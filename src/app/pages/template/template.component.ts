import { Component, OnInit } from '@angular/core';
import {SmsService} from '../../servicios/sms.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private sms: SmsService) { 

  }

  ngOnInit(): void {
  }

  enviarSMS(telefono,mensaje)
  {
    this.sms.enviarSMS(telefono,mensaje).subscribe(data => {console.log(data);},error => {console.log(error);});
  }

}
