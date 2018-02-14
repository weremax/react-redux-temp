import React, { Component } from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: this.props.coords
        });
    }
    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;