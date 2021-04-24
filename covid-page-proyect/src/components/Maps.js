import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

function MyComponent(props) {

  const containerStyle = {
    width: '575px',
    height: '500px'
  };
  
  const center = {
    lat: 22.317795748659528,
    lng:  -97.8478864084168
  };
  
  const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  };
  
  const renderMarcadores = ({ establecimientos }) => {
    console.log(establecimientos);
    if (!establecimientos) {
      return('');
    }
    console.log(establecimientos)
    return establecimientos.map(establecimiento => {
      const position = { 
        lat: parseFloat(establecimiento.Latitud),
        lng: parseFloat(establecimiento.Longitud)
      }
        return (
          <Marker
          key={establecimiento.Id}
          onLoad={onLoad}
          position={position}
          label={establecimiento.Nombre}
          onClick={() => {
            alert('Nombre: ' + establecimiento.Nombre + 
            '\nTelefono: ' + establecimiento.Telefono)
          }}
        />
      )
    })
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCSXK1ltyhzvG7sdglfTid4GzU2EbSI55s"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
      {renderMarcadores(props)}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)