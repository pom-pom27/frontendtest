import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { memo, useRef } from "react";
import appStore from "../../../util/appState";
import InfoPlace from "../info-place/InfoPlace";
import styles from "./map-view.module.scss";
interface IMapView {}

export interface MapObject {
  name: string;
  lat: number;
  long: number;
  desc: string;
  img: string;
  address: string;
  website: string;
}
const containerStyle = {
  width: "1420px",
  height: "875px",
};

const options: google.maps.MapOptions = {
  streetViewControl: false,
  disableDefaultUI: true,
  minZoom: 15,
  clickableIcons: false,
  center: {
    lat: 1.28692,
    lng: 103.85457,
  },
};

const MapView = ({}: IMapView) => {
  const selectedPlace = appStore((state) => state.selectedPlace);
  const setSelectedPlace = appStore((state) => state.setSelectedPlace);

  const mapRef = useRef<GoogleMap | null>(null);

  const mapList = appStore((state) => state.mapList);

  const isShowInfo = appStore((state) => state.isShowInfo);
  const setIsShow = appStore((state) => state.setIsShow);

  return (
    <LoadScript googleMapsApiKey="API_KEY">
      <GoogleMap
        center={{
          lat: selectedPlace?.lat ?? 1.28692,
          lng: selectedPlace?.long ?? 103.85457,
        }}
        options={options}
        ref={mapRef}
        mapContainerStyle={containerStyle}
        zoom={15}
      >
        {mapList.length > 0 &&
          mapList.map((map, index) => (
            <OverlayView
              key={index}
              position={{ lat: map.lat, lng: map.long }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                data-name={map.name}
                onClick={() => {
                  mapRef.current?.state.map?.panTo({
                    lat: map.lat,
                    lng: map.long,
                  });

                  setSelectedPlace(map);

                  setIsShow(true);

                  mapRef.current?.state.map?.setZoom(17);
                }}
                className={styles.marker}
              ></div>
            </OverlayView>
          ))}
      </GoogleMap>

      {selectedPlace && isShowInfo && <InfoPlace map={selectedPlace} />}
    </LoadScript>
  );
};

export default memo(MapView);
