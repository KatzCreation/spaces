import * as React from 'react'
import * as L from 'leaflet'

export class MapView extends React.Component<{}, {}> {


  componentDidMount () {
    const map = new L.Map('map', {
        center: new L.LatLng(40.731253, -73.996139),
        zoom: 12,
      })

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoic2t0YW5rMTYiLCJhIjoiY2o3ejh0MG0yNjdwZDMycnJmaDlsam52NCJ9.r0aMy80G7VQsr2qVhEF4Qg'
    }).addTo(map)

    map.on('click', (e: L.LeafletMouseEvent) => {
        let marker = L.marker(e.latlng)
        .bindPopup('Popup')
        .addTo(map)
        .openPopup()
      })
  }

  render () {
    return <div id='map'>
    </div>
  }

}
