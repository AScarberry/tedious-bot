import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from './services/request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tedious-Bot';

  orderForm = this._formBuilder.group({
    orderPhone: [null, Validators.required],
    orderNumber: [null, Validators.required],
  });

  orderFormSubmitted = false;
  orderResult: any = 'Waiting for Input...';
  orderImagePath: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _requestService: RequestService
  ) { }

  ngOnInit() {

  }

  getOrderResults() {
    this.orderFormSubmitted = true;
    this.orderResult = 'Waiting for Result...'
    const message = {
      topic: 'flooring',
      data: {
        phoneNum: this.orderForm.get('orderPhone')?.value,
        orderNum: this.orderForm.get('orderNumber')?.value
      }
    }
    this._requestService.request(message).subscribe((response) => {
      if (response.message === message.topic) {
        this.orderResult = response.result.value;
        this.orderImagePath = "data:image/png;base64," + response.result.image;
      }
      this.orderFormSubmitted = false;
    });
  }
}
