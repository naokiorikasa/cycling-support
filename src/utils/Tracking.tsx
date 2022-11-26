import * as Location from "expo-location";

const LocationSetting = {
  accuracy: Location.Accuracy.High,
  timeInterval: 10000,
  distanceInterval: 1,
};

export async function startTracking(client: any) {
  console.log("Starting tracking");
  if (!client.location) {
    client.location = Location.watchPositionAsync(LocationSetting, (loc) => {
      console.log(loc);
    });
  }
}

export async function stopTracking(client: any) {
  console.log("Remove tracking");
  await client.location.remove();
}
