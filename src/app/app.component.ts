import { Component } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GcpAddressKey';

  options: any = {
    componentRestrictions: { country: 'IN' }
  }  

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }  

}
