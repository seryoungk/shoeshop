import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Map = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const mapOptions = {
      zoom: 17,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map(mapElement.current, mapOptions);

    new window.naver.maps.Marker({
      map,
    });
  }, []);

  return (
    <>
      <Navbar />
      <MapContainer ref={mapElement} />
    </>
  );
};
export default Map;

const MapContainer = styled.div`
  height: 90vh;
`;
