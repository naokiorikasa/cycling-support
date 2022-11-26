import { createContext, Dispatch, SetStateAction } from "react";

export interface LocationState {
  location: string;
  updateLocation: Dispatch<SetStateAction<string>>;
}

export const LocationContext = createContext<LocationState>({
  location: "",
  updateLocation: () => undefined,
});
