import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LanguageService {
    Language: string = 'en-us';
    private LangSubject: BehaviorSubject<string> = new BehaviorSubject(this.Language);
    Language$: Observable<string> = this.LangSubject.asObservable();
    LangObj: any = {};

    constructor(private http: HttpClient) { }
    getLang(_Lang: string) {
        this.http.get('assets/fill/' + _Lang + '.json').subscribe(json => { this.LangObj = json; })
        this.Language = _Lang;
        this.LangSubject.next(this.Language);
    }
}
