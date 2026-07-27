export type GestureCommand = "continue" | "stop" | "wave" | null;

export interface RobotTelemetry {
  currentStop: number;
  distanceToVisitor: number;
  obstacleDetected: boolean;
  gesture: GestureCommand;
  batteryLevel: number;
}

export interface RobotMessage {
  type: "telemetry" | "gesture" | "command" | "heartbeat" | "pong";
  payload: Partial<RobotTelemetry>;
}

export interface RobotCommand {
  type: "command";
  action: "continue" | "stop" | "next_node" | "set_speed";
  value?: number;
}
