// src/app/services/map.service.ts
import { Injectable } from '@angular/core';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  constructor() {}

  initMap(mapElement: HTMLElement, center: google.maps.LatLngLiteral): void {
    this.map = new google.maps.Map(mapElement, {
      center,
      zoom: 10,
    });
  }

  addMarker(position: google.maps.LatLngLiteral): void {
    const marker = new google.maps.Marker({
      position,
      map: this.map,
    });
    this.markers.push(marker);
  }

  clearMarkers(): void {
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
    this.markers = [];
  }
}
