import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { useRobotStore } from "@/store/robot";
import { useMapProgress } from "@/hooks/use-map-progress";
import { MUSEUM_NODES } from "@/data/museum-map";
import { stopListening } from "@/lib/speech";

export function useGestureNavigation(currentNodeId: string | null) {
  const router = useRouter();
  const { lastGesture, setGesture } = useRobotStore();
  const { completeNode } = useMapProgress();
  const handledGestureRef = useRef<string | null>(null);

  useEffect(() => {
    if (!lastGesture || !currentNodeId) return;
    if (handledGestureRef.current === lastGesture) return;

    handledGestureRef.current = lastGesture;
    setGesture(null);

    const current = MUSEUM_NODES.find((n) => n.id === currentNodeId);
    if (!current) return;

    const next = MUSEUM_NODES.find((n) => n.order === current.order + 1);

    completeNode(current.id);

    stopListening();

    if (next) {
      router.replace(`/node/${next.id}`);
    }
  }, [lastGesture, currentNodeId, completeNode, setGesture, router]);
}
