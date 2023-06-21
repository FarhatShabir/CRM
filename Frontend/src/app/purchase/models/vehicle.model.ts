import { Validators } from '@angular/forms';

export interface VehicleModel extends Validators{
      condition:[string,Validators],
      car_name: [string,Validators],
      companyName: [string,Validators],
      color: [string,Validators],
      fuel_type:[string,Validators],
      engine_no:[string,Validators],
      vehicle_no:[string,Validators],
      registration:[any,Validators],
      purchaseAgrement:[any,Validators],
      totalAmount: [string,Validators],
      paidAmount: [string,Validators],
      balanceAmount:[string,Validators],
      registrationYear:[string,Validators],
      variant:[string]
}
