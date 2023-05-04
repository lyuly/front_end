import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  } = { type: '', name: '', content: '' };
  @Input() name: string = '';

  @ViewChild('heading') header: ElementRef | undefined;

  @ContentChild('contentParagraph') paragraph: ElementRef | undefined;

  constructor() {
    console.log('constructor called!');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('heading: ', this.header?.nativeElement.textContent);
    console.log('Content of paragraph', this.paragraph?.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('heading: ', this.header?.nativeElement.textContent);
    console.log('Content of paragraph', this.paragraph?.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
}
