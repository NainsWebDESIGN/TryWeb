import { Component } from '@angular/core';
import { ListenService } from '@service/Listen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListenService]
})
export class AppComponent {
  title = 'app';
}
