import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

url = 'http://localhost:3050/';

constructor(
    private http: HttpClient
  ) { }

enviarSMS(phone: string, message: string): Observable<any>{
  const body = {
    telefono: phone,
    mensaje: message
  };

  return this.http.post(this.url + 'sms', body);
}

}
