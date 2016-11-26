import { Component, ViewChild, ElementRef } from '@angular/core';

import { Platform } from 'ionic-angular';

import { GoogleMap, GoogleMapsLatLng} from 'ionic-native';

import { IconfigProvider } from '../../providers/iconfig-provider';



import { NavController } from 'ionic-angular';
declare var google: any;
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  private jsonContent: Object;

  private title: string;


  @ViewChild('mapCanvas') mapElement: ElementRef;
  public map: GoogleMap;
  public platform : any;

  private mapCenterLat: number;
  private mapCenterLng: number;

  private defaultMarkerLat: number;
  private defaultMarkerLng: number;
  private defaultMarkerTitle: string;


  constructor(public navCtrl: NavController,platform: Platform, private IconfigProvider: IconfigProvider ) {

    //platform checks the user platform (android, ios, or desktop).
    this.platform = platform;
    //this function prepares the inconfig.json for parsing.
    this.jsonContent = this.IconfigProvider.getJson().subscribe(
      ( data ) => {this.jsonContent = data;},
      ( err ) => {console.log(err);},
      () => {
        this.IconfigProvider.setJsonContent(this.jsonContent);
        this.setJsonLocally();
        this.initializeMap();
      }
    );



  }



  //this method sets the local variables of the component according to the iconfig file.
  private setJsonLocally() {
    this.jsonContent = JSON.parse(this.IconfigProvider.getJsonContent());
    let content      = this.jsonContent[ 'Application' ][ 'page' ][ 0 ][ 'home' ];
    let instance     = content[ 'default-instance' ];
    this.title       = instance[ 'title' ];
    this.mapCenterLat = +instance['Map-Center']['Latitude'];
    this.mapCenterLng = +instance['Map-Center']['Longitude'];
    this.defaultMarkerLat = +instance['Default-Marker']['Latitude'];
    this.defaultMarkerLng = +instance['Default-Marker']['Longitude'];
    this.defaultMarkerTitle = instance['Default-Marker']["title"];
  }


  //this function is provided by googleMaps API and initialized the map.
  initializeMap() {

    this.platform.ready().then(() => {
      var minZoomLevel = 12;
      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(this.mapCenterLat, this.mapCenterLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      //this line below creates a marker on the map.
      let marker = new google.maps.Marker({
        position: new GoogleMapsLatLng(this.defaultMarkerLat, this.defaultMarkerLng),
        map: this.map,
        title: this.defaultMarkerTitle
      });
    });
  }
}
