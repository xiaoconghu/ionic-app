import {Component, OnInit} from '@angular/core';
import {RecommendService} from '../core/api-server/recommend.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    slideOpts = {
        effect: 'flip'
    };
    root = '';
    images = [];
    swipes = [];
    items = [];

    constructor(
                private recommendService: RecommendService,
                ) {
    }

    ngOnInit(): void {
        this.getRecommend();
        this.getCdInfo();
        this.recommendService.getCdListDetail(333).subscribe(e => {
            console.log(e);
        });
    }

    goToDetail() {
    }

    open() {
        // const options: CameraOptions = {
        //     quality: 100,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE
        // };
        //
        // this.camera.getPicture(options).then((imageData) => {
        //     // imageData is either a base64 encoded string or a file URI
        //     // If it's base64 (DATA_URL):
        //     console.log(imageData);
        //     const base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //     // Handle error
        // });

    }

    click() {
    }

    getRecommend() {
        this.recommendService.getRecommend().subscribe((result: any) => {
            console.log(result);
            this.swipes = result.data.slider;
        });
    }

    getCdInfo() {
        this.recommendService.getCdInfo().subscribe((result: any) => {
            this.items = result.data.list;
        });
    }


}


