import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { locationStateSelector } from "../store/selectors/LocationStateSelector";

const HomeScreen: React.FC = () => {
  const location = useRecoilValue(locationStateSelector);

  function decimalPart(num: number, decDigits: number) {
    //let decPart = num - (num >= 0 ? Math.floor(num) : Math.ceil(num));
    //console.log(decPart);
    //return decPart.toFixed(decDigits);
    let result = "00";
    let decPart = String(num).split(".")[1];
    console.log(typeof decPart);
    if (typeof decPart !== "undefined") {
      decPart.slice(-1 * decDigits);
    }
    return result;
  }

  /** 時間差に変換 */
  function getTextTimeSpan(start: number, end: number) {
    console.log("start=" + start);
    console.log("end=" + end);
    let date1 = new Date(start);
    let date2 = new Date(end);

    let diff = date2.getTime() - date1.getTime();
    console.log("diff=" + diff);
    // 秒 （time / 1000ミリ秒）
    let result = Math.abs(diff) / 1000;

    return result.toString();
  }

  /** 時間に変換 */
  function getDate(timestamp: number) {
    let date = new Date(timestamp);

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return (
      hour.toString().padStart(2, "0") +
      ":" +
      min.toString().padStart(2, "0") +
      ":" +
      sec.toString().padStart(2, "0")
    );
  }

  console.log(location);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.row,
          {
            backgroundColor: "green",
            //opacity: 0.2,
          },
        ]}
      >
        {/* 傾斜 */}
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>heading</Text>
            <Text style={{ fontSize: 14 }}> (°)</Text>
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            <Text style={{ fontSize: 40 }}>
              {location.heading == 0 ? 0 : Math.trunc(location.heading)}
            </Text>
          </Text>
        </View>
        {/* 標高*/}
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>Altitude</Text>
            <Text style={{ fontSize: 14 }}> (m)</Text>
            {/*<Text>Altitude (m){"\n"}</Text>*/}
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            <Text style={{ fontSize: 40 }}>
              {location.altitude == 0 ? 0 : Math.trunc(location.altitude)}
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            backgroundColor: "red",
            //opacity: 0.2,
          },
        ]}
      >
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>緯度</Text>
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            <Text style={{ fontSize: 30 }}>
              {location.latitude /*Math.trunc(location.latitude)*/}
            </Text>
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>軽度</Text>
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            <Text style={{ fontSize: 30 }}>
              {location.longitude /*Math.trunc(location.longitude)*/}
            </Text>
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.row,
          {
            backgroundColor: "powderblue",
          },
        ]}
      >
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>Time</Text>
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            <Text style={{ fontSize: 36 }}>
              {
                getDate(location.end_time)
                /*getTextTimeSpan(location.start_time, location.end_time)*/
              }
            </Text>
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 22 }}>Distance</Text>
          </Text>
          <Text style={[styles.content, { flex: 2 }]}></Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: "skyblue",
          //justifyContent: "center",
          //alignItems: "center",
        }}
      >
        {/* 速度 */}
        <View style={styles.item}>
          <Text style={[styles.content, { flex: 1 }]}>
            <Text style={{ fontSize: 24 }}>Speed</Text>
            <Text style={{ fontSize: 16 }}> (kph)</Text>
            {/*<Text>Speed (kph){"\n"}</Text>*/}
          </Text>
          <Text style={[styles.content, { flex: 2 }]}>
            {/*<Text style={{ fontSize: 90 }}>24</Text>*/}
            {/*<Text style={{ fontSize: 45 }}>.38</Text>*/}
            <Text style={{ fontSize: 90 }}>
              {location.speed == 0 ? 0 : Math.trunc(location.speed)}
            </Text>
            <Text style={{ fontSize: 45 }}>
              .{location.speed == 0 ? "00" : decimalPart(location.speed, 2)}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
  },
  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  item: {
    flex: 1,
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    //backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000",
    fontSize: 16,
    fontWeight: "bold",
    //flexDirection: "row",
    //justifyContent: "space-between",
  },
  paragraph: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});

export default HomeScreen;
