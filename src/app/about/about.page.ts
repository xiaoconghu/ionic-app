import {Component, OnInit} from '@angular/core';
import {RecommendService} from '../core/api-server/recommend.service';
import {CommonUtil} from '../core/common-util';

@Component({
    selector: 'app-about',
    templateUrl: 'about.page.html',
    styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
    singerData = [];

    constructor(private recommendService: RecommendService) {
    }

    ngOnInit(): void {
        this.getSingerList();
    }

    getSingerList() {
        let data = [];
        const arr = [];
        const generateBig = CommonUtil.generateBig_1();
        this.recommendService.getSingerList().subscribe((success: any) => {
            data = success.data.list;
            data.forEach((_item, index) => {
                _item._Fsinger_mid = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${_item.Fsinger_mid}.jpg?max_age=2592000`;
                if (index < 5) {
                    arr.push(_item);
                }
            });
            this.singerData.push({index: '热', childNode: arr});
            generateBig.forEach(item => {
                const _arr = data.filter((_item, index) => {
                    if (item === _item.Findex) {
                        return _item;
                    }
                });
                let obj;
                if (data.length > 0) {
                    obj = {index: item, childNode: _arr};
                }
                this.singerData.push(obj);
            });
        });
        console.log(this.singerData);
    }

    selectItem() {

    }
}
