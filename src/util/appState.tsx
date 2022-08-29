import create from "zustand";
import { MapObject } from "../components/atom/map-view/MapView";

export interface AppState {
  mapList: MapObject[];
  selectedPlace: MapObject | null;
  resetMap: () => void;
  isShowInfo: boolean;
  setIsShow: (show: boolean) => void;
  setSelectedPlace: (place: MapObject) => void;
  fetchJson: () => void;
}

const appStore = create<AppState>()((set) => ({
  mapList: [],
  isShowInfo: false,
  setIsShow: (show) => set({ isShowInfo: show }),
  setSelectedPlace: (place) => set({ selectedPlace: place }),
  selectedPlace: null,
  resetMap: () => set({ selectedPlace: null }),
  fetchJson: async () => {
    const res = await fetch("map.json");

    const data = (await res.json()) as MapObject[];
    set({ mapList: data });
  },
}));

export default appStore;
