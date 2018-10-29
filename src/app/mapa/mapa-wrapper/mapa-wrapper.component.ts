import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  NgZone
} from '@angular/core';
import * as GeoJSON from 'geojson';
import * as L from 'leaflet';
import { Pais, LocalidadeService } from 'app/shared/localidade';
import { ActivatedRoute, Router } from '@angular/router';

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
    zoom: 2,
    maxZoom: 4,
    minZoom: 2
  };

  private _selecteds: any[] = [];
  private _layers = new Map<string, L.Layer[]>();
  private _pais: Pais;

  @HostBinding('class.bg-layer')
  bgLayer = true;

  @Input()
  set malha(malha: GeoJSON.GeoJsonObject) {
    const layer: L.LayerGroup = L.geoJSON(malha, {
      style: feature => this._featureStyle(this, feature),

      onEachFeature: (
        feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>,
        _layer: L.Layer
      ) => {
        this._setOnEachFeatureListeners(feature, _layer, this);
      }
    });

    this.leafletLayers = [layer];
    this._registerLayers(layer.getLayers());
  }

  @Input()
  set pais(pais: Pais) {
    this._pais = pais;
    this._highlightPais(pais);
  }

  constructor(
    protected ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private localidadeService: LocalidadeService
  ) {}

  onMapReady(map: L.Map) {
    this._map = map;

    map.invalidateSize();
    map.setMaxBounds(L.latLngBounds(L.latLng(-50, -175), L.latLng(90, 179)));

    if (this._selecteds.length > 0) {
      map.fitBounds(this._selecteds[0].getBounds());
    } else {
      map.fitWorld({ maxZoom: 5 });

      if (this._pais) {
        this._highlightPais(this._pais);
      }
    }
  }

  private _highlightPais(pais: Pais) {
    if (this._selecteds.length > 0) {
      this._selecteds.forEach(layer => this.unselectLayer(layer));
    }

    if (!pais) {
      return;
    }
    const layerArray = pais ? this._layers.get(pais.sigla3) || [] : [];
    setTimeout(() => {
      layerArray.forEach(layer => this.selectLayer(layer));
      if (this._map) {
        this._map.fitBounds(this._selecteds[0].getBounds());
      }
    }, 0);
  }

  selectLayer(layer: any) {
    if (layer) {
      const el = layer.getElement();
      el.classList.add(CSS_CLASSES.SELECTED);
      this._selecteds = [...this._selecteds, layer];
    }
  }

  unselectLayer(layer: any) {
    if (layer) {
      const el = layer.getElement();
      el.classList.remove(CSS_CLASSES.SELECTED);
      this._selecteds = this._selecteds.filter(selected => selected !== layer);
    }
  }

  private _featureStyle(context: any, feature: any) {
    const { style, sigla } = feature.properties;

    return Object.assign({}, style, {
      className: CSS_CLASSES.NORMAL,
      id: sigla
    });
  }

  private _registerLayers(layers: any) {
    this._layers.clear();
    layers.forEach((layer: any) => {
      if (layer.feature && layer.feature.properties) {
        if (this._layers.has(layer.feature.properties.sigla)) {
          (<any>this._layers.get(layer.feature.properties.sigla)).push(layer);
        } else {
          this._layers.set(layer.feature.properties.sigla, [layer]);
        }
      }
    });
  }

  private _onClickMap(layer: L.Layer) {
    const that = this;
    layer.on({
      click: evt => {
        that.ngZone.run(() => {
          const pais = this.localidadeService.getPaisBySigla(
            evt.target.feature.properties.sigla
          );

          if (pais) {
            // @ts-ignore
            this.router.navigate(['/', 'mapa', pais.slug], {
              relativeTo: this.route
            });
          }
        });
      }
    });
  }

  private _popup(feature: any, layer: any, context: any) {
    const pais = context.localidadeService.getPaisBySigla(
      feature.properties.sigla
    );

    if (pais) {
      const msg =
        pais.nomes.pt +
        (feature.properties.nota ? ` (${feature.properties.nota.pt})` : '') +
        (feature.properties.valor
          ? `<br /> <strong>${feature.properties.valor}</strong>`
          : '');
      layer.bindTooltip(msg);

      layer.on({
        mouseup: (evt: any) => {
          layer.openTooltip();
        },
        mouseout: (evt: any) => {
          layer.closeTooltip();
        }
      });
    }
  }

  private _setOnEachFeatureListeners(
    feature: GeoJSON.Feature<GeoJSON.GeometryObject, any>,
    layer: L.Layer,
    context: any
  ) {
    context._onClickMap(layer);
    context._popup(feature, layer, context);
  }
}
