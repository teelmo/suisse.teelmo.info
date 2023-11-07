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
          description: 'Map where city locations have been defined using latitude/longitude.'
        },
        chart: {
          map: topology,
          height: 500
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
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
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.kan_name}</b>'
          },
          data: [{
            name: 'Schwyz',
            color: '#2ab7ca'
          }, {
            name: 'Genève',
            color: '#2ab7ca'
          }, {
            name: 'Valais',
            color: '#2ab7ca'
          }, {
            name: 'Solothurn',
            color: '#2ab7ca'
          }, {
            name: 'Vaud',
            color: '#2ab7ca'
          }, {
            name: 'Ticino',
            color: '#2ab7ca'
          }, {
            name: 'Jura',
            color: '#2ab7ca'
          }, {
            name: 'Zürich',
            color: '#2ab7ca'
          }, {
            name: 'Neuchâtel',
            color: '#2ab7ca'
          }, {
            name: 'Graubünden',
            color: '#2ab7ca'
          }, {
            name: 'Luzern',
            color: '#2ab7ca'
          }, {
            name: 'Fribourg',
            color: '#2ab7ca'
          }, {
            name: 'St. Gallen',
            color: '#2ab7ca'
          }, {
            name: 'Schaffhausen',
            color: '#2ab7ca'
          }, {
            name: 'Bern',
            color: '#2ab7ca'
          }, {
            name: 'Glarus',
            color: '#2ab7ca'
          }],
          name: 'Switzerland',
          nullColor: '#f4f4f8',
          showInLegend: false,
          joinBy: ['kan_name', 'name'],
        }, {
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          type: 'mappoint',
          name: 'Cities',
          color: '#000',
          data: [{
            name: 'Genève',
            lat: 46.2044,
            lon: 6.1432
          }, {
            name: 'Saas-Fee',
            lat: 46.1091,
            lon: 7.9297
          }, {
            name: 'Locarno',
            lat: 46.1670,
            lon: 8.7943
          }, {
            name: 'Mürren',
            lat: 46.5594,
            lon: 7.8927
          }, {
            name: 'Zürich',
            lat: 47.3769,
            lon: 8.5417
          }, {
            name: 'Rorschach',
            lat: 47.4789,
            lon: 9.4917
          }, {
            name: 'Scuol',
            lat: 46.7969,
            lon: 10.2977
          }, {
            name: 'Lucerne',
            lat: 47.0502,
            lon: 8.3093
          }, {
            name: 'Ozronnas',
            lat: 46.1978,
            lon: 7.1753
          }, {
            name: 'Villars-sur-Ollon',
            lat: 46.2984,
            lon: 7.0550
          }, {
            name: 'Le Châble',
            lat: 46.0801,
            lon: 7.2105
          }, {
            name: 'Orsières',
            lat: 46.0282,
            lon: 7.1471
          }, {
            name: 'Olten',
            lat: 47.3500,
            lon: 7.9037
          }, {
            name: 'Amden',
            lat: 47.1492,
            lon: 9.1401
          }, {
            name: 'Interlaken',
            lat: 46.6863,
            lon: 7.8632
          }, {
            name: 'Solothurn',
            color: '#fff',
            lat: 47.2088,
            lon: 7.5323
          }, {
            name: 'Vevey',
            color: '#fff',
            lat: 46.4628,
            lon: 6.8419
          }, {
            name: 'Cully',
            color: '#fff',
            lat: 46.4896,
            lon: 6.7291
          }, {
            name: 'Nyon',
            color: '#fff',
            lat: 46.3833,
            lon: 6.2348
          }, {
            name: 'Lausanne',
            color: '#fff',
            lat: 46.5197,
            lon: 6.6323
          }, {
            name: 'Montreux',
            color: '#fff',
            lat: 46.4312,
            lon: 6.9107
          }, {
            name: 'Lugano',
            color: '#fff',
            lat: 46.0037,
            lon: 8.9511
          }, {
            name: 'Saint-Cergue',
            color: '#fff',
            lat: 46.4460,
            lon: 6.1581
          }, {
            name: 'Hermance',
            color: '#fff',
            lat: 46.3022,
            lon: 6.2444
          }, {
            name: 'Gruyères',
            color: '#fff',
            lat: 46.5778,
            lon: 7.0625
          }, {
            name: 'Le Pont',
            color: '#fff',
            lat: 46.6496,
            lon: 6.3203
          }, {
            name: 'Leysin',
            color: '#fff',
            lat: 46.3436,
            lon: 7.0120
          }, {
            name: 'Verbier',
            color: '#fff',
            lat: 46.0961,
            lon: 7.2286
          }]
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
