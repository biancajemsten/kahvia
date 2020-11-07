import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import CoffeBeanURL from "../assets/coffee-bean.svg";

const defaultCenter = { lat: 60.1699, lng:24.9384 }
const center2 = { lat: 60.1789, lng:24.9381 };
const center3 = { lat: 60.1721, lng:24.9401 };
const center4 = { lat: 60.1721, lng:24.9281 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={ defaultCenter }
      defaultOptions={ defaultOptions }
    >
      <Marker position={ defaultCenter } icon={{url:CoffeBeanURL, scaledSize: new google.maps.Size(20, 20), origin: new google.maps.Point(0,0), anchor: new google.maps.Point(0, 0)}} />
      <Marker position={ center2 } icon={{url:CoffeBeanURL, scaledSize: new google.maps.Size(20, 20), origin: new google.maps.Point(0,0), anchor: new google.maps.Point(0, 0)}} />
      <Marker position={ center3 } icon={{url:CoffeBeanURL, scaledSize: new google.maps.Size(20, 20), origin: new google.maps.Point(0,0), anchor: new google.maps.Point(0, 0)}} />
      <Marker position={ center4 } icon={{url:CoffeBeanURL, scaledSize: new google.maps.Size(20, 20), origin: new google.maps.Point(0,0), anchor: new google.maps.Point(0, 0)}} />
    </GoogleMap>
  ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '500px' };
const mapElementStyle = { height: '100%' };

export function GoogleMaps(){
  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
  );
}