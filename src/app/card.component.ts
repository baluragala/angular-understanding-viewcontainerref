import {Component, ViewContainerRef, TemplateRef, ViewChild} from "@angular/core";

@Component({
  selector: 'card',
  template: `
      <ng-template #template>
        <p>This is dynamic</p>
      </ng-template>
      <h1>Card Header</h1>
      <input type="button" value="add" (click)="add()"/>
      <input type="button" value="remove" (click)="remove()"/>
    `
})
export class CardComponent {

  @ViewChild('template') template;

  constructor(private viewContainerRef: ViewContainerRef) {
    console.log(viewContainerRef);
  }

  add() {
    console.log(this.template);
    this.viewContainerRef.createEmbeddedView(this.template)
  }

  remove() {
    this.viewContainerRef.remove(this.viewContainerRef.length - 1)
  }

}
