import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabNavigatorParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import MemoryScreen from "../screens/MemoryScreen";

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const TabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Memory" component={MemoryScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
