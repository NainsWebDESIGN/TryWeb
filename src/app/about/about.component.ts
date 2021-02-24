import { Component, OnInit } from '@angular/core';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data: any = ["Html & CSS", "Javascript", "Angular", "PHP", "Google Ads", "SEO"];
  constructor(public lang: LanguageService) { }

  ngOnInit() {
  }

}
