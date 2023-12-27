import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[inputFocus]',
})
export class InputFocusDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('focus')
  onFocus() {
    const targetElement = this.elementRef.nativeElement as HTMLElement;
    const label = targetElement.parentElement?.previousSibling;
    const fieldset = targetElement.parentElement?.querySelector('fieldset');
    const legend = targetElement.parentElement?.querySelector('legend');

    this.renderer2.addClass(label, 'focused');
    this.renderer2.addClass(fieldset, 'focused');
    this.renderer2.addClass(legend, 'focused');
  }

  @HostListener('blur')
  onBlur() {
    const targetElement = this.elementRef.nativeElement as HTMLInputElement;
    const label = targetElement.parentElement?.previousSibling;
    const fieldset = targetElement.parentElement?.querySelector('fieldset');
    const legend = targetElement.parentElement?.querySelector('legend');

    if (!targetElement.value) {
      this.renderer2.removeClass(label, 'focused');
      this.renderer2.removeClass(fieldset, 'focused');
      this.renderer2.removeClass(legend, 'focused');
    }
  }
}
