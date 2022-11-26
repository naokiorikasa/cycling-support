import { atom } from "recoil";
import { LocationData } from "../../navigation/types";

export const locationState = atom<LocationData>({
  key: "locationState",
  default: {
    start_time: 0,
    end_time: 0,
    heading: 0,
    altitude: 0,
    speed: 0,
    latitude: 0,
    longitude: 0,
  },
});
