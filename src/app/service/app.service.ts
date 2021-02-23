import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    scrollTop = 0;
    // 客戶端高度 + 物件頂部已滾動的距離
    constructor() {
        window.addEventListener('scroll', (el: any) => {
            this.scrollTop
                = Number(el.target.scrollingElement.clientHeight)
                + Number(el.target.scrollingElement.scrollTop)
        })
    }

}
