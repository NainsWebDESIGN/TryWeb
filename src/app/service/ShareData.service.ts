import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ShareDataService {
    circle: any = false;
    private CircleSubject: BehaviorSubject<string> = new BehaviorSubject(this.circle);
    circle$: Observable<string> = this.CircleSubject.asObservable();
    constructor() { }
    changeCircle(_Bl: any) {
        this.circle = _Bl;
        this.CircleSubject.next(this.circle);
    }
}
