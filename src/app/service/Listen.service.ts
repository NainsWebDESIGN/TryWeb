import { Injectable, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListenService implements OnInit {
    @HostListener('window:scroll', ['$event'])
    Scroll(_Event: any) {
        //客戶端高度
        // let clientH = _Event.path[0].scrollingElement.clientHeight;
        //body高度
        // let bodyH = _Event.path[0].scrollingElement.clientHeight;
        //滾動的高度
        let scrollTop = _Event.path[0].scrollingElement.scrollTop;
        this.ScrollBox.header = scrollTop > 0 ? true : false;
        this.ScrollBox.development[0] = scrollTop > 699 ? true : false;
        this.ScrollBox.development[1] = scrollTop > 1099 ? true : false;
        this.ScrollBox.skills_chart = scrollTop > 1585 ? true : false;
        this.ScrollBox.education = scrollTop > 2133 ? true : false;
        this.ScrollBox.portfolio[0] = scrollTop > 3051 ? true : false;
        this.ScrollBox.portfolio[1] = scrollTop > 3361 ? true : false;
        this.ScrollBox.pricing = scrollTop > 4269 ? true : false;
        this.ScrollBox.blog = scrollTop > 5156 ? true : false;
    }
    ScrollBox: any = {
        header: false,
        development: [false, false],
        skills_chart: false,
        education: false,
        portfolio: false,
        pricing: false,
        blog: false
    }
    DataBass: any = {};
    private SubjectData = new BehaviorSubject(this.DataBass);
    DataBass$ = this.SubjectData.asObservable()
    constructor(private http: HttpClient) { }
    ngOnInit() {
        this.http.get('assets/json/databass.json').subscribe(el => {
            this.DataBass = el;
        })
    }
}
