import { Component, ViewChild, forwardRef }        from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad }                            from 'angular2-signaturepad/signature-pad';
import { Student } from './Student';

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

 
  model = new Student('', '',0, '','');
  submitted = false;

  public options: Object = {};

  public _signature: any = null;

  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

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
  }
  active = true;
  newStudent() {
    this.model.Signature = '';
     this.model = new Student('', '',0, '','');
     this.active = false;
     setTimeout(() => this.active = true, 0);
     return JSON.stringify(this.model); 
  }
  get diagnostic() { 
    this.model.Signature = this.signature;
  		return JSON.stringify(this.model); 
    
  }
}
