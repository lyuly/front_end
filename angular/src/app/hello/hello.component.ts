import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  name = null;
  item = 'text-lg text-blue-300';

  h3Dom = true;

  showSkills: boolean = true;

  type = 'password';

  title: string = '';

  skills: Array<string> = [];

  age2: FormControl = new FormControl('');

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  fn() {
    console.log('clicked');
  }

  toggleSkills() {
    this.showSkills = !this.showSkills;
    this.type = this.type + 1;
  }

  changeType() {
    if (this.type === 'password') {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  clickFn(e: string) {
    console.log(e);
  }

  inputChanged(e: Event) {
    console.log(e);
  }

  addSkill(skill: string) {
    let skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
    console.log(this.skills);
  }

  ageChangeFun() {
    this.age2.setValue('20');
  }

  @Input() age: number = 0;

  @Output() update = new EventEmitter<{sum: number}>();
}
