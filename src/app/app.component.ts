import { Component } from '@angular/core';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LanguageService]
})
export class AppComponent {
  constructor(public lang: LanguageService) { }
}
