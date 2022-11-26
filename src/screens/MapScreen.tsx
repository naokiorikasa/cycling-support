import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { useRecoilValue } from "recoil";
import { locationStateSelector } from "../store/selectors/LocationStateSelector";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02; //0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapScreen: React.FC = () => {
  const location = useRecoilValue(locationStateSelector);
  const [delta, setDelta] = useState({
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [region, setRegion] = useState({
    latitude: location.latitude, // initial location latitude
    longitude: location.longitude, // initial location longitude
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    setRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    console.log("setRegion:\n" + JSON.stringify(region));
  }, [location]);

  const handleRegionChange = (region: Region) => {
    console.log("handleRegionChange:\n" + JSON.stringify(region));
    /*setDelta({
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    });*/
    //setZoom(Math.round(Math.log(360 / region.latitudeDelta) / Math.LN2));
    let zoom: number = Math.floor(
      Math.log2(360 * (width / 256 / region.longitudeDelta))
    );
    console.log("zoom level:" + zoom);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        //initialRegion={region}
        region={region} /*現在地を中心に表示*/
        //loadingEnabled={false}
        showsUserLocation={true} /*自分の位置を表示*/
        //showsMyLocationButton={true}
        //showsBuildings={false}
        //minZoomLevel={13}
        //maxZoomLevel={18}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsTraffic={true}
        toolbarEnabled={true}
        onMapReady={() => {}}
        onRegionChangeComplete={(region: Region) => handleRegionChange(region)}
      ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
