import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./componentStyles/map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const almaty = { lng: 76.88, lat: 43.23 };
  const zoom = 12;
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER;

  
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.OPENSTREETMAP,    
      center: [almaty.lng, almaty.lat],
      zoom: zoom,
    });
  }, [almaty.lng, almaty.lat, zoom]);


  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
