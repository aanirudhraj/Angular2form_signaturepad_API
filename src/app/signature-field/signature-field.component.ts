import { Component, ViewChild, forwardRef }        from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad }                            from 'angular2-signaturepad/signature-pad';
import { Student } from './Student';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'signature-field',
  templateUrl: 'signature-field.component.html',
  styleUrls: ['signature-field.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureFieldComponent),
      multi: true,
    },
  ],
})
export class SignatureFieldComponent implements ControlValueAccessor {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  constructor (private http: Http) {}
 
  model = new Student('', '', '','');
  submitted = false;

  public options: Object = {};

  public _signature: any = null;

  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

    private commentsUrl = 'http://192.168.0.78:8080/api/signature';

     postData:string;

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    this.propagateChange(this.signature);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // no-op
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
  }

  public drawBegin(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL('image/jpeg', 0.5);
  }

  onSubmit() { 
  		this.submitted = true; 

               this.postNew(this.model).subscribe(data => this.postData = JSON.stringify(data)),
       error => console.log(error),
       ()=>console.log("Post finished");

  }
  active = true;
  newStudent() {
    this.model.sig = '';
     this.model = new Student('', '', '','');
     this.active = false;
     setTimeout(() => this.active = true, 0);
     return JSON.stringify(this.model); 
  }

postNew (body: Object): Observable<Student[]> {
      console.log("body:"+ body);
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log("bodyString:"+ bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option



        return this.http.post(this.commentsUrl, body, options) // ...using post request
                         .map((res:Response) => res.json().do(console.log("resp:"+ res))) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


  get diagnostic() { 
    this.model.sig = this.signature;
  		return JSON.stringify(this.model); 
    
  }
}
