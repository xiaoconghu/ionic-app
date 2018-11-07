import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.page.html',
    styleUrls: ['contact.page.scss'],
    providers: []
})
export class ContactPage implements OnInit {

    constructor(
    ) {
    }

    ngOnInit(): void {
    }

    openCamera() {
        // const options: CameraOptions = {
        //     quality: 100,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     encodingType: this.camera.EncodingType.JPEG,
        //     mediaType: this.camera.MediaType.PICTURE
        // };
        //
        // this.camera.getPicture(options).then((imageData) => {
        //
        //     console.log(imageData);
        //     const base64Image = 'data:image/jpeg;base64,' + imageData;
        // }, (err) => {
        //     throw new Error(err);
        // });
    }

    openBluetooth() {
        // this.bluetoothSerial.enable().then(e => {
        //     console.log(e);
        // });
    }

    openGPS() {
        // const config: BackgroundGeolocationConfig = {
        //     desiredAccuracy: 10,
        //     stationaryRadius: 20,
        //     distanceFilter: 30,
        //     debug: true, //  enable this hear sounds for background-geolocation life-cycle.
        //     stopOnTerminate: false, // enable this to clear background location settings when the app terminates
        // };
        //
        // this.backgroundGeolocation.configure(config)
        //     .subscribe((location: BackgroundGeolocationResponse) => {
        //
        //         console.log(location);
        //         this.backgroundGeolocation.finish(); // FOR IOS ONLY
        //
        //     });
        //
        // this.backgroundGeolocation.start();
        //
        // this.backgroundGeolocation.stop();
    }
}
