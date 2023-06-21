import {Validators} from '@angular/forms'

export interface iLoginForm extends Validators{
  email:[string,Validators];
  password:[string,Validators]
}
