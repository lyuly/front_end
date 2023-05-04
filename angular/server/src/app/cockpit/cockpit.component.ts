import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    type: string;
    name: string;
    content: string;
  }>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef | undefined;

  // newServerName: string = '';
  // newServerContent: string = '';

  constructor() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: nameInput.value,
      content: this.serverContentInput?.nativeElement.value,
    });
  }

  onAddBlueprint(contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      type: 'blueprint',
      name: contentInput.value,
      content: this.serverContentInput?.nativeElement.value,
    });
  }
}
