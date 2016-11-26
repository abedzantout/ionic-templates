import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from 'ionic-angular';

import { GoogleMap, GoogleMapsLatLng} from 'ionic-native';



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
  
  private mapCenterLat: number;
  private mapCenterLng: number;

  private defaultMarkerLat: number;
  private defaultMarkerLng: number;


  constructor(public navCtrl: NavController,platform: Platform) {

    this.mapCenterLat = 33.9011;
    this.mapCenterLng = 35.4811;

    this.platform = platform;
    this.initializeMap();
  }


  initializeMap() {

    this.platform.ready().then(() => {
      var minZoomLevel = 12;

      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(this.mapCenterLat, this.mapCenterLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      let marker = new google.maps.Marker({
        position: new GoogleMapsLatLng(33.9011, 35.4811),
        map: this.map,
        title: "Default Marker"
      });
    });
  }
}
