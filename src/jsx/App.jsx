import React, { useCallback, useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';

// Load helpers.
highchartsMap(Highcharts);
highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);

function App() {
  const map = useRef();
  const initMap = useCallback(() => {
    (async () => {
      const topology = await fetch(
        './assets/data/georef-switzerland-kanton@public.geojson'
      ).then(response => response.json());

      // Initialize the chart
      Highcharts.mapChart('map_container', {
        accessibility: {
          description: ''
        },
        chart: {
          height: Math.max(window.innerHeight, 800),
          map: topology
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: true,
          verticalAlign: 'top'
        },
        mapNavigation: {
          enabled: true
        },
        plotOptions: {
          series: {
            enableMouseTracking: true,
            states: {
              hover: {
                color: '#f00',
                enabled: false
              }
            }
          }
        },
        series: [{
          borderColor: '#fff',
          borderWidth: 2,
          color: '#2ab7ca',
          data: [{
            name: 'Schwyz',
          }, {
            name: 'Genève'
          }, {
            name: 'Valais'
          }, {
            name: 'Solothurn'
          }, {
            name: 'Vaud',
          }, {
            name: 'Ticino',
          }, {
            name: 'Jura',
          }, {
            name: 'Zürich'
          }, {
            name: 'Neuchâtel'
          }, {
            name: 'Graubünden'
          }, {
            name: 'Luzern'
          }, {
            name: 'Fribourg'
          }, {
            name: 'St. Gallen'
          }, {
            name: 'Schaffhausen'
          }, {
            name: 'Bern'
          }, {
            name: 'Glarus'
          }],
          joinBy: ['kan_name', 'name'],
          name: 'Visited Kanton',
          nullColor: '#f4f4f8',
          showInLegend: true,
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.kan_name}</b>'
          }
        }, {
          color: '#000',
          data: [{
            lat: 46.2044,
            lon: 6.1432,
            name: 'Genève'
          }, {
            lat: 46.1091,
            lon: 7.9297,
            name: 'Saas-Fee'
          }, {
            lat: 46.1670,
            lon: 8.7943,
            name: 'Locarno'
          }, {
            lat: 46.5594,
            lon: 7.8927,
            name: 'Mürren'
          }, {
            lat: 47.3769,
            lon: 8.5417,
            name: 'Zürich'
          }, {
            lat: 47.4789,
            lon: 9.4917,
            name: 'Rorschach'
          }, {
            lat: 46.7969,
            lon: 10.2977,
            name: 'Scuol'
          }, {
            lat: 47.0502,
            lon: 8.3093,
            name: 'Lucerne'
          }, {
            lat: 46.1978,
            lon: 7.1753,
            name: 'Ovronnaz'
          }, {
            lat: 46.2984,
            lon: 7.0550,
            name: 'Villars-sur-Ollon'
          }, {
            lat: 46.0801,
            lon: 7.2105,
            name: 'Le Châble'
          }, {
            lat: 46.0282,
            lon: 7.1471,
            name: 'Orsières'
          }, {
            lat: 47.3500,
            lon: 7.9037,
            name: 'Olten'
          }, {
            lat: 47.1492,
            lon: 9.1401,
            name: 'Amden'
          }, {
            lat: 46.6863,
            lon: 7.8632,
            name: 'Interlaken'
          }],
          marker: {
            symbol: 'circle',
          },
          name: 'Spend a night',
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          type: 'mappoint'
        }, {
          color: '#ccc',
          data: [{
            lat: 47.2088,
            lon: 7.5323,
            name: 'Solothurn'
          }, {
            lat: 46.4628,
            lon: 6.8419,
            name: 'Vevey'
          }, {
            lat: 46.4896,
            lon: 6.7291,
            name: 'Cully'
          }, {
            lat: 46.3833,
            lon: 6.2348,
            name: 'Nyon'
          }, {
            lat: 46.5197,
            lon: 6.6323,
            name: 'Lausanne'
          }, {
            lat: 46.4312,
            lon: 6.9107,
            name: 'Montreux'
          }, {
            lat: 46.0037,
            lon: 8.9511,
            name: 'Lugano'
          }, {
            lat: 46.4460,
            lon: 6.1581,
            name: 'Saint-Cergue'
          }, {
            lat: 46.3022,
            lon: 6.2444,
            name: 'Hermance'
          }, {
            lat: 46.5778,
            lon: 7.0625,
            name: 'Gruyères'
          }, {
            lat: 46.6496,
            lon: 6.3203,
            name: 'Le Pont'
          }, {
            lat: 46.3436,
            lon: 7.0120,
            name: 'Leysin'
          }, {
            lat: 46.0961,
            lon: 7.2286,
            name: 'Verbier'
          }],
          marker: {
            symbol: 'circle',
          },
          name: 'Visited cities',
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          type: 'mappoint'
        }],
        title: {
          text: null
        }
      });
    })();
  }, []);
  useEffect(() => {
    initMap();
  }, [initMap, map]);

  return (
    <div className="app">
      <div className="map" id="map_container" />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
