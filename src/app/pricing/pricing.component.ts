import { Component, OnInit } from '@angular/core';
import { ListenService } from '@service/Listen.service'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  data: any = [];
  constructor(public scroll: ListenService) { }
  ngOnInit() {
    this.scroll.DataBass.subscribe((el: any) => {
      this.data = el.pricing;
    })
  }

}
