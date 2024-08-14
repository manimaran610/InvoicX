import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[DecimalTwoPlaces]'
})
export class DecimalTwoPlacesDirective {

  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'Left', 'Right', 'Delete', 'ArrowLeft', 'ArrowRight'];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    
    const input: HTMLInputElement = this.el.nativeElement;
    const current: string = input.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent): void {
    const input: HTMLInputElement = this.el.nativeElement;
    const value: string = input.value;

    if (value) {
      const [integerPart, decimalPart] = value.split('.');
      
      if (decimalPart && decimalPart.length > 2) {
        input.value = integerPart + '.' + decimalPart.slice(0, 2);
        this.renderer.setProperty(input, 'value', input.value);
      }
    }
  }
}