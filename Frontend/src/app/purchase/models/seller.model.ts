import { Validators } from '@angular/forms';

export interface SellerModel extends Validators {
      seller_name: [string,Validators]
      email:[string,Validators],
      phone_no:[string,Validators],
      address:[string,Validators],
      postal_code:[string,Validators],
      purchase_date:[any,Validators]
      aadhar_card:[any,Validators],
      pan_card:[any,Validators]
}
