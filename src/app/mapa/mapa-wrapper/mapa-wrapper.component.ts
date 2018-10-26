import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding
} from '@angular/core';
import * as GeoJSON from 'geojson';
import * as L from 'leaflet';

export enum CSS_CLASSES {
  SELECTED = 'leaflet--selected-layer',
  NORMAL = 'leaflet--interactive-layer',
  IGNORE = 'leaflet--uninteractive-layer'
}

@Component({
  selector: 'mapa-wrapper',
  templateUrl: './mapa-wrapper.component.html',
  styleUrls: ['./mapa-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaWrapperComponent {
  public leafletLayers = [];
  public _map = null;
  public mapOptions = {
    zoom: 3,
    maxZoom: 5,
    minZoom: 3
  };

  @HostBinding('class.bg-layer')
  bgLayer = true;

  @Input()
  set malha(malha: GeoJSON.GeoJsonObject) {
    const layer: L.LayerGroup = L.geoJSON(malha, {
      style: feature => this._featureStyle(this, feature)

      // onEachFeature: (feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>, layer: L.Layer) => {
      //     this._setOnEachFeatureListeners(feature, layer, this);
      // }
    });

    this.leafletLayers = [layer];
    // this._registerLayers(layer.getLayers());
  }

  constructor() {}

  onMapReady(map: L.Map) {
    this._map = map;

    map.invalidateSize();
    map.setMaxBounds(L.latLngBounds(L.latLng(-50, -175), L.latLng(90, 179)));

    // if (this._selecteds.length > 0) {
    //   map.fitBounds(this._selecteds[0].getBounds());
    // } else {
    map.fitWorld({ maxZoom: 5 });

    // if (this._pais) {
    //   const layers = this._layers.get(this._pais.sigla3) || [];
    //   setTimeout(() => layers.forEach(layer => this.selectLayer(layer)), 0);
    // }
    // }
  }

  private _featureStyle(context: any, feature: any) {
    const { style, sigla } = feature.properties;

    return Object.assign({}, style, {
      className: CSS_CLASSES.NORMAL,
      id: sigla
    });
  }
}
