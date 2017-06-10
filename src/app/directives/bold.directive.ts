import{Directive, ElementRef,Input, Renderer} from '@angular/core';
@Directive({
    selector:'[bold]'
})

export class boldDirective{
    @Input('bold') elt: ElementRef;

constructor(
    private elRef: ElementRef,
    private renderer: Renderer)
{
    this.renderer.setElementStyle(this.elRef.nativeElement, 'font-weight', 'bold')
}
}