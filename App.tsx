import { RecoilRoot } from "recoil";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { Gyroscope, ThreeAxisMeasurement } from "expo-sensors";
// import { Subscription } from "expo-sensors/build/Pedometer";

const App: React.FC = () => {
  // const [data, setData] = useState({} as ThreeAxisMeasurement);
  // const [subscription, setSubscription] = useState<Subscription>();

  // const _slow = () => {
  //   Gyroscope.setUpdateInterval(1000);
  // };

  // const _fast = () => {
  //   Gyroscope.setUpdateInterval(16);
  // };

  // const _subscribe = () => {
  //   setSubscription(
  //     Gyroscope.addListener((gyroscopeData) => {
  //       setData(gyroscopeData);
  //     })
  //   );
  // };

  // const _unsubscribe = () => {
  //   subscription && subscription.remove();
  //   //setSubscription(null);
  // };

  // useEffect(() => {
  //   _subscribe();
  //   return () => _unsubscribe();
  // }, []);

  // const { x, y, z } = data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RecoilRoot>
        <RootNavigator />
        <StatusBar style="auto" />
      </RecoilRoot>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Gyroscope:</Text>
    //   <Text style={styles.text}>
    //     x: {round(x)} y: {round(y)} z: {round(z)}
    //   </Text>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity
    //       onPress={subscription ? _unsubscribe : _subscribe}
    //       style={styles.button}
    //     >
    //       <Text>{subscription ? "On" : "Off"}</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={_slow}
    //       style={[styles.button, styles.middleButton]}
    //     >
    //       <Text>Slow</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={_fast} style={styles.button}>
    //       <Text>Fast</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

/*function round(n: number) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}*/

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 10,
//   },
//   text: {
//     textAlign: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     alignItems: "stretch",
//     marginTop: 15,
//   },
//   button: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#eee",
//     padding: 10,
//   },
//   middleButton: {
//     borderLeftWidth: 1,
//     borderRightWidth: 1,
//     borderColor: "#ccc",
//   },
// });

export default App;
