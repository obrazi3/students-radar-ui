import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[srCardImg]',
})
export class CardImageDirective implements OnInit {
    @Input('srCardImg')
    url: string;

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.style.backgroundImage = `url('${this.url}')`;
        this.element.nativeElement.style.backgroundSize = 'cover';
    }
}
