import{Directive, ElementRef, /*HostListener, */ Input, Renderer, Renderer2} from '@angular/core';

@Directive({
    selector:'[bold]',
    host:{
         '(mouseenter)':'onMouseEnter()',
         '(mouseleave)':'onMouseLeave()' 
          }
})

export class boldDirective{
    @Input('bold') elt: ElementRef;

constructor(
    private elRef: ElementRef,
    private renderer: Renderer2)
    {
        // this.renderer.setElementStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    }
//I
// @HostListener('mouseenter') onMouseEnter()
// {
//     this.setFontWeight('bold')
// }

// @HostListener('mouseleave') onMouseLeave()
// {
//     this.setFontWeight('normal')
// }

//II
onMouseEnter()
{
    this.setFontWeight('bold')
}

onMouseLeave()
{
    this.setFontWeight('normal')
}

private setFontWeight(val: string) {
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', val);
    }
}