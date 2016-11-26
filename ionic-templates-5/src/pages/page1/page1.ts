import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from 'ionic-angular';

import { GoogleMap, GoogleMapsLatLng, GoogleMapsMarkerOptions } from 'ionic-native';



import { NavController } from 'ionic-angular';
declare var google: any;
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  @ViewChild('mapCanvas') mapElement: ElementRef;
  public map: GoogleMap;
  public platform : any;


  constructor(public navCtrl: NavController,platform: Platform) {

    this.platform = platform;
    this.initializeMap();
  }


  initializeMap() {

    this.platform.ready().then(() => {
      var minZoomLevel = 12;

      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(33.9011, 35.4811),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });
  }
}
