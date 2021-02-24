import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild("homename") Name: ElementRef;
  @ViewChild("homedes") Des: ElementRef;
  load: boolean = false;
  constructor() { }

  ngOnInit() {
    this.Name.nativeElement.innerHTML = this.Name.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
    this.Des.nativeElement.innerHTML = this.Des.nativeElement.firstChild.textContent.replace(/\S/g, "<span>$&</span>");
  }

  ngAfterViewInit() {
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
