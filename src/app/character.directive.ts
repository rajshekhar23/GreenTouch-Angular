import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[app-character-only]'
})
export class CharacterDirective {
  private regex: RegExp = new RegExp(/^[a-zA-Z ]+$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab'," ", 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight'];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}