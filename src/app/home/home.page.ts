import {Component, OnInit} from '@angular/core';
import {BatteryStatus} from '@ionic-native/battery-status/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {
    BackgroundGeolocation, BackgroundGeolocationConfig,
    BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation/ngx';
import {RecommendService} from '../core/api-server/recommend.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [BatteryStatus, Camera, BackgroundGeolocation]
})
export class HomePage implements OnInit {
    slideOpts = {
        effect: 'flip'
    };
    root = '';
    images = [];
    swipes = [];
    items = [];

    constructor(private batteryStatus: BatteryStatus,
                private backgroundGeolocation: BackgroundGeolocation,
                private recommendService: RecommendService,
                private camera: Camera) {
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
        console.log(111);
        const subscription = this.batteryStatus.onChange().subscribe(status => {
            console.log(status.level, status.isPlugged);
        });
        console.log(subscription);
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            console.log(imageData);
            const base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
            // Handle error
        });
        console.log('da');
        const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  enable this hear sounds for background-geolocation life-cycle.
            stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        };

        this.backgroundGeolocation.configure(config)
            .subscribe((location: BackgroundGeolocationResponse) => {

                console.log(location);

                // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                this.backgroundGeolocation.finish(); // FOR IOS ONLY

            });

// start recording location
        this.backgroundGeolocation.start();

// If you wish to turn OFF background-tracking, call the #stop method.
        this.backgroundGeolocation.stop();
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


