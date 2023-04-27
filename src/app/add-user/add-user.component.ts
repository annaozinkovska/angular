import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private renderer: Renderer2) { }
  @Output() onUser = new EventEmitter();
  nameInputValue = '';
  statusInputValue = '';
  avatarInputValue = '';

  onName(event: any) {
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    this.statusInputValue = event.target.value;
  }
  onAvatar(event: any) {
    this.avatarInputValue = event.target.value;
  }
  AddNewUser(nameValue: string, statusValue: string, avaValue: string) {
    const value = {
      name: nameValue,
      status: statusValue.slice(0, 50),
      avatar: avaValue,
    }
    
    
    const img = document.querySelector('.picture img');
    this.renderer.setStyle(img, 'width', '100px');
    this.renderer.setStyle(img, 'height', '100px');
    this.onUser.emit(value);
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.avatarInputValue = '';
  }
}


