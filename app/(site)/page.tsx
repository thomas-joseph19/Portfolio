import { Scene01Init } from "@/components/scenes/Scene01Init";
import { Scene02Identity } from "@/components/scenes/Scene02Identity";
import { Scene03Statement } from "@/components/scenes/Scene03Statement";
import { Scene04Profile } from "@/components/scenes/Scene04Profile";
import { Scene05Transition } from "@/components/scenes/Scene05Transition";
import { Scene06Featured } from "@/components/scenes/Scene06Featured";
import { Scene07Continuation } from "@/components/scenes/Scene07Continuation";

export default function HomePage() {
  return (
    <div className="w-full relative">
      <Scene01Init />
      <Scene02Identity />
      <Scene03Statement />
      <Scene04Profile />
      <Scene05Transition />
      <Scene06Featured />
      <Scene07Continuation />
    </div>
  );
}
