import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LanguageService } from '@service/Language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("homename") Name: ElementRef;
  @ViewChild("homedes") Des: ElementRef;
  load: boolean = false;
  Title: string = "FrontEnd Web Designer";
  constructor(public lang: LanguageService) { }
  ngOnInit() {
    this.lang.Language$.subscribe(el => {
      this.Title = el == 'en-us' ? 'FrontEnd Web Designer' : '前端網頁設計師';
      this.Des.nativeElement.innerHTML = this.Title;
    })
  }
  ngAfterViewInit() {
    this.Name.nativeElement.innerHTML = this.Name.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
    this.Des.nativeElement.innerHTML = this.Des.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
    setTimeout(() => {
      this.load = true;
      anime.timeline({ loop: false })
        .add({
          targets: '.homedes span',
          translateX: [490, 0],
          scale: [1, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 2000,
          delay: anime.stagger(100)
        })
      anime.timeline({ loop: false })
        .add({
          targets: '.homename span',
          translateY: [-600, 0],
          translateX: [200, 0],
          scale: [10, 1],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 2000,
          delay: anime.stagger(310),
        })
    }, 1000)
  }
}
