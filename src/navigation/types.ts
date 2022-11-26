import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MemoryStackNavigatorParamList = {
  Memory: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type MemoryMemoryScreenNavigationProp = NativeStackNavigationProp<
  MemoryStackNavigatorParamList,
  "Details"
>;

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Map: undefined;
  Memory: MemoryStackNavigatorParamList;
};

export type LocationData = {
  start_time: number;
  end_time: number;
  heading: number;
  altitude: number;
  speed: number;
  latitude: number;
  longitude: number;
};
