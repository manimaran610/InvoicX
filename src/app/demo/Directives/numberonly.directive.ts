import { Directive, HostListener, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[numberonly]"
})
export class numberonlyDirective {
  private regex: RegExp = new RegExp(/^\d*$/); // Only digits

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    // Allow only numbers
    if (!this.regex.test(inputValue)) {
      // Remove any non-numeric characters
      input.value = inputValue.replace(/\D/g, '');
      // Trigger an input event to update the model
      input.dispatchEvent(new Event('input'));
    }
  }
}