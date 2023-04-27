import { Component, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private renderer: Renderer2) { }
  @Input() name = '';
  @Input() status = '';
  @Input() avatar = '';

  clearBody() {
    this.name = '';
    this.status = '';
    this.avatar = '';
    const img = document.querySelector('.picture img');
    this.renderer.setStyle(img, 'width', '0px');
    this.renderer.setStyle(img, 'height', '0px');
  }
}