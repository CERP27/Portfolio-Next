// hooks/useParticles.ts
import { IParticle } from "@/interfaces/particles.interface";
import { useEffect, useState } from "react";

export const useParticles = (count: number = 20) => {
  const [particles, setParticles] = useState<IParticle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, [count]);

  return particles;
};
