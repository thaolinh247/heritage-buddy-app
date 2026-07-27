import { create } from "zustand";
import type { GestureCommand, RobotTelemetry } from "@/types/robot";

interface RobotStore {
  isConnected: boolean;
  telemetry: RobotTelemetry | null;
  lastGesture: GestureCommand;

  setConnected: (connected: boolean) => void;
  updateTelemetry: (data: Partial<RobotTelemetry>) => void;
  setGesture: (gesture: GestureCommand) => void;
}

export const useRobotStore = create<RobotStore>((set) => ({
  isConnected: false,
  telemetry: null,
  lastGesture: null,

  setConnected: (isConnected) => set({ isConnected }),
  updateTelemetry: (data) =>
    set((s) => ({
      telemetry: s.telemetry ? { ...s.telemetry, ...data } : null,
    })),
  setGesture: (gesture) => set({ lastGesture: gesture }),
}));
