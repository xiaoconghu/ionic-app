/**
 * Created by WH1709040 on 2018/11/3.
 */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class RecommendService {

    constructor(private $http: HttpClient) {
    }

    getRecommend() {
        return this.$http.get(`${environment.qqPrefix}/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487
        &inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1`);
    }

    getCdInfo() {
        return this.$http.get(`${environment.mkPrefix}/music/api//getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice
        =0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.9901930620826456`);
    }

    getCdListDetail(id) {
        const data = Object.assign({}, getCdListDetailParmas, {
            disstid: id,
        });
        return this.$http.get(`${environment.mkPrefix}/music/api/getCdInfo`, {params: data});
    }
    getSingerList() {
            return this.$http.get(`${environment.qqPrefix}/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8
            &notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq`);
    }
}

export const commonParams = {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'json'
};

const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
});
const getCdListDetailParmas = Object.assign({}, commonParams, {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp',
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
});

