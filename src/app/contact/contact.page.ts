import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.page.html',
    styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

    constructor() {
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
}
