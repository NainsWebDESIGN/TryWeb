import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data: any = ["Html & CSS", "Javascript", "Angular", "PHP", "Google Ads", "SEO"];
  constructor() { }

  ngOnInit() {
  }

}
