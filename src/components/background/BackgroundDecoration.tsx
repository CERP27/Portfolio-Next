import { Particles } from "./ParticlesDecoration";
import { RadialDecoration } from "./RadialDecoration";

export const BackgroundDecoration = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-[#0e0b1d]">
      <RadialDecoration />

      <Particles count={35} />
    </div>
  );
};
