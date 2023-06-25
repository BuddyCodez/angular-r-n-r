import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  carName: string | null | undefined;
  carPrice: string | null | undefined;
  Tprice: string | null | undefined;
  carTransmission: string | null | undefined;
  carImg: string | null | undefined;
  Pdate: string | null | undefined;
  Rdate: string | null | undefined;
  selectedOption: string = 'Googlepay';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.carName = params.get('cname');
      this.carPrice = params.get('cprice');
      this.carTransmission = params.get('ctransmission');
      this.carImg = params.get('cimg');
      this.Tprice = this.carPrice?.split('/')[0];
    });
  }
  payment() {

    if (!this.Pdate || !this.Rdate) {
      alert('Please select pick up and return date');
      return;
    }
    var obj: any = {
      name: this.carName,
      price: this.carPrice,
      thumbnail: this.carImg,
      transmission: this.carTransmission,
      pickupdate: this.Pdate,
      returndate: this.Rdate,
      payment: this.selectedOption,
      totalprice: this.Tprice
    }
    var arr = [];
    var data = localStorage.getItem('cart');
    if (data) {
      arr = JSON.parse(data);
    }
    arr.push(obj);
    localStorage.setItem('cart', JSON.stringify(arr));
    alert('Payment Done');
    window.location.href = "/profile";
  }
  change() {
    if (this.Rdate && this.Pdate) {
      const date1 = new Date(this.Rdate);
      const date2 = new Date(this.Pdate);

      // Calculate the difference in milliseconds
      const diffInMs = Math.abs(date2.getTime() - date1.getTime());

      // Convert milliseconds to days
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      this.Tprice = (diffInDays * parseInt(this.carPrice?.split('/')[0] ?? '0')).toString();
    }
  }
}