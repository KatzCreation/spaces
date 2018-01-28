import * as React from 'react'
import * as L from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'

const ACCESS_TOKEN = 'pk.eyJ1Ijoic2t0YW5rMTYiLCJhIjoiY2o3ejh0MG0yNjdwZDMycnJmaDlsam52NCJ9.r0aMy80G7VQsr2qVhEF4Qg'

interface IState {
    leftPanelExpanded: boolean;
}

export class MapView extends React.Component<{}, IState> {
    state: IState = { leftPanelExpanded: false }

    private toggleLeftPanel = () => {
        this.setState({ leftPanelExpanded: !this.state.leftPanelExpanded });
    }

    public render () {
        const  { leftPanelExpanded } = this.state;
        return (
            <div className={`map-container ${leftPanelExpanded ? "left-expanded" : ""}`}>
                <div className="map-panel-left">
                    <div className="toggle-panel-button"
                        onClick={this.toggleLeftPanel}    
                    >
                        { leftPanelExpanded ? "<<" : ">>" }
                    </div>
                </div>
            <Map
                    center={new L.LatLng(40.731253, -73.996139)}
                    zoom={12}
                >
                    <TileLayer
                        url='http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png'
                    />
                </Map>
                <div className="map-panel-right" />
            </div>
        )
  }

}
