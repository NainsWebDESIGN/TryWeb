import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    data: any = {
        portfolio: {},
        blog: []
    };
    private SubData: BehaviorSubject<any> = new BehaviorSubject(this.data);
    data$: Observable<any> = this.SubData.asObservable();
    constructor(private http: HttpClient) { }
    postServer(_Code: number, _Req: any) {
        switch (_Code) {
            case 149:
                this.Select(_Req);
                break;
            case 131:
                this.Insert(_Req);
        }
    }
    Select(_Req) {
        const req = this.Conversion(_Req);
        this.http.post('assets/php/gateWay.php', req).subscribe(el => {
            _Req.type == 'blog' ? this.data.blog = el : this.data.portfolio = el;
            this.SubData.next(this.data);
        })
    }
    Insert(_Req) {
        const insert = this.Conversion(_Req);
        this.http.post('asset/php/Insert.php', insert).subscribe();
    }
    Conversion(_Obj: any) {
        let keys = Object.keys(_Obj);
        const obj$ = new FormData();
        for (let i = 0; i < keys.length; i++) { obj$.append(keys[i], _Obj[keys[i]]); }
        return obj$;
    }
}
