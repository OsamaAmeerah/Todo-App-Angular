import { Component,  EventEmitter, Input , Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',

  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! :User;
  @Input({required:true}) selected! :boolean;

  // to do out put when selecting a user
 @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  //? output in signals
  // select = output<string>();

  //? in signals:
  // avatar = input.required<string>();
  // name = input.required<string>();

  //? image path in signal:
  // imagePath = computed(()=>'assets/users/' + this.avatar());


}
