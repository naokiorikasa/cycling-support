import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavi from "./TabsNavi";
import { useRecoilState, useRecoilValue } from "recoil";
import * as Location from "expo-location";
import { locationState } from "../store/atoms/LocationStateAtom";
import { locationStateSelector } from "../store/selectors/LocationStateSelector";

const RootNavigator: React.FC = () => {
  //const locValue = useRecoilValue(locationStateSelector);
  const [locState, setLocation] = useRecoilState(locationState);
  const [permission, setPermission] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      // if (Platform.OS === 'android' && !Device.isDevice) {
      //   setErrorMsg(
      //     'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
      //   );
      //   return;
      // }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      setPermission(true);

      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);

      const LocationSetting = {
        accuracy: Location.Accuracy.High,
        timeInterval: 5000,
        distanceInterval: 1,
      };

      try {
        // 位置情報の更新を監視する
        await Location.watchPositionAsync(LocationSetting, (loc) => {
          console.log(loc /*JSON.stringify(loc)*/);
          //console.log("start_time=" + locValue.start_time);
          //console.log("end_time=" + locValue.end_time);
          setLocation({
            start_time: loc.timestamp,
            end_time: loc.timestamp,
            heading: loc.coords.heading == null ? 0 : loc.coords.heading,
            altitude: loc.coords.altitude == null ? 0 : loc.coords.altitude,
            speed: loc.coords.speed == null ? 0 : loc.coords.speed,
            latitude: loc.coords.latitude == null ? 0 : loc.coords.latitude,
            longitude: loc.coords.longitude == null ? 0 : loc.coords.longitude,
          });
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let text: String = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
    // } else if (locState) {
    //   text = JSON.stringify(locState);
  }

  return permission == false ? (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  ) : (
    <NavigationContainer>
      <TabsNavi />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default RootNavigator;
