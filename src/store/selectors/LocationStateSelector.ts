import { selector } from "recoil";
import { locationState } from "../atoms/LocationStateAtom";

export const locationStateSelector = selector({
  key: "locationStateSelector",
  get: ({ get }) => {
    const location = get(locationState);

    return location;
  },
});
