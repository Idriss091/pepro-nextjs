"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import {
  Color,
  Group,
  MathUtils,
  SRGBColorSpace,
  TextureLoader,
} from "three";
import finoviaDesktop from "../../../direction/references/finovia-desktop.png";

type HeroSceneProps = {
  active: boolean;
  reduceMotion: boolean;
};

type AssemblyProps = Pick<HeroSceneProps, "reduceMotion">;

const CYAN = "#72edf5";
const GREEN = "#b8ff5d";
const INK = "#071013";

function ScreenLayer({ texture }: { texture: ReturnType<TextureLoader["load"]> }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.45, 3.28, 0.16]} />
        <meshPhysicalMaterial color="#071113" metalness={0.7} roughness={0.22} clearcoat={0.8} />
      </mesh>
      <mesh position={[0, 0, 0.086]}>
        <planeGeometry args={[5.15, 2.9]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
      <mesh position={[-2.49, 1.49, 0.18]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color={CYAN} />
      </mesh>
    </group>
  );
}

function LogicLayer() {
  const bars = useMemo(
    () => [
      [-1.75, 0.72, 1.5, 0.2],
      [0.65, 0.72, 2.05, 0.2],
      [-1.25, 0.05, 2.5, 0.18],
      [1.37, -0.6, 0.98, 0.18],
      [-1.62, -0.65, 1.72, 0.18],
    ] as const,
    [],
  );

  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.25, 3.08, 0.17]} />
        <meshPhysicalMaterial color="#0a1719" metalness={0.42} roughness={0.3} clearcoat={0.55} />
      </mesh>
      {bars.map(([x, y, width, height], index) => (
        <mesh position={[x, y, 0.13]} key={`${x}-${y}`}>
          <boxGeometry args={[width, height, 0.08]} />
          <meshStandardMaterial
            color={index === 1 || index === 4 ? CYAN : "#24474b"}
            emissive={index === 1 || index === 4 ? CYAN : "#0b1d20"}
            emissiveIntensity={index === 1 || index === 4 ? 0.75 : 0.2}
            metalness={0.35}
            roughness={0.28}
          />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[4.75, 2.6, 12, 8]} />
        <meshBasicMaterial color="#1e555a" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function DataLayer() {
  const points = useMemo(
    () => Array.from({ length: 28 }, (_, index) => ({
      x: -2.15 + (index % 7) * 0.72,
      y: -1.02 + Math.floor(index / 7) * 0.68,
      height: 0.08 + ((index * 17) % 9) * 0.035,
      active: index % 5 === 0 || index === 17,
    })),
    [],
  );

  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.05, 2.9, 0.2]} />
        <meshPhysicalMaterial color="#08100b" metalness={0.68} roughness={0.28} clearcoat={0.4} />
      </mesh>
      {points.map((point, index) => (
        <mesh position={[point.x, point.y, 0.16 + point.height / 2]} key={index}>
          <boxGeometry args={[0.19, 0.19, point.height]} />
          <meshStandardMaterial
            color={point.active ? GREEN : "#244022"}
            emissive={point.active ? GREEN : "#0a1409"}
            emissiveIntensity={point.active ? 0.7 : 0.12}
            roughness={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function InfrastructureLayer() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4.85, 2.72, 0.32]} />
        <meshPhysicalMaterial color="#05090a" metalness={0.9} roughness={0.18} clearcoat={0.75} />
      </mesh>
      {[-1.62, -0.54, 0.54, 1.62].map((x, index) => (
        <group position={[x, 0, 0.23]} key={x}>
          <mesh>
            <boxGeometry args={[0.78, 2.12, 0.14]} />
            <meshStandardMaterial color="#111d1f" metalness={0.75} roughness={0.32} />
          </mesh>
          {[-0.65, -0.22, 0.22, 0.65].map((y) => (
            <mesh position={[0.24, y, 0.09]} key={y}>
              <sphereGeometry args={[0.025, 8, 8]} />
              <meshBasicMaterial color={index === 2 ? GREEN : CYAN} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function PeripheralElements() {
  const elements = useMemo(
    () => [
      [-3.8, 1.65, -1.2, 1.3, 0.035, 0.035, -0.22, CYAN],
      [3.65, 1.15, -0.4, 1.85, 0.025, 0.025, 0.15, "#315b5f"],
      [-3.55, -1.35, 0.2, 1.55, 0.028, 0.028, 0.12, GREEN],
      [3.85, -1.55, -1.5, 1.15, 0.035, 0.035, -0.18, "#416c45"],
      [-2.95, 2.05, -2, 0.18, 0.18, 0.18, 0.4, "#478e94"],
      [3.1, 2.1, -1.1, 0.13, 0.13, 0.13, -0.2, GREEN],
    ] as const,
    [],
  );

  return (
    <group>
      {elements.map(([x, y, z, width, height, depth, rotation, color], index) => (
        <mesh position={[x, y, z]} rotation={[0, 0, rotation]} key={index}>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.28} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Assembly({ reduceMotion }: AssemblyProps) {
  const group = useRef<Group>(null);
  const screen = useRef<Group>(null);
  const logic = useRef<Group>(null);
  const data = useRef<Group>(null);
  const infra = useRef<Group>(null);
  const [sourceTexture] = useLoader(TextureLoader, [finoviaDesktop.src]);
  const { viewport } = useThree();

  const finoviaTexture = useMemo(() => {
    const texture = sourceTexture.clone();
    texture.colorSpace = SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  }, [sourceTexture]);

  useEffect(() => () => finoviaTexture.dispose(), [finoviaTexture]);

  const layerRefs = [screen, logic, data, infra];

  useFrame((state, delta) => {
    if (!group.current) return;

    const mobile = viewport.width < 7;
    const scroll = reduceMotion ? 0 : MathUtils.clamp(window.scrollY / Math.max(window.innerHeight * 0.65, 1), 0, 1);
    const elapsed = state.clock.elapsedTime;
    const settle = reduceMotion ? 1 : MathUtils.clamp(elapsed / 1.8, 0, 1);
    const easedSettle = 1 - Math.pow(1 - settle, 4);
    const pointerX = reduceMotion ? 0 : state.pointer.x;
    const pointerY = reduceMotion ? 0 : state.pointer.y;

    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -0.4 + pointerY * 0.06, 4, delta);
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, -0.24 + pointerX * 0.11, 4, delta);
    group.current.rotation.z = MathUtils.damp(group.current.rotation.z, -0.035 + pointerX * 0.018, 4, delta);
    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      (mobile ? -1.05 : -0.92) + (reduceMotion ? 0 : Math.sin(elapsed * 0.55) * 0.045) - scroll * 0.36,
      3,
      delta,
    );
    group.current.scale.setScalar(mobile ? 0.5 : Math.min(1.02, viewport.width / 14));

    const finalZ = [0.95, 0.28, -0.4, -1.06];
    const finalY = [1.08, 0.36, -0.38, -1.12];
    const entrance = [3.2, 1.2, -1.4, -3.4];

    layerRefs.forEach((ref, index) => {
      if (!ref.current) return;
      const explode = scroll * (1.2 + index * 0.12);
      const targetZ = MathUtils.lerp(entrance[index], finalZ[index], easedSettle) + (1.5 - index) * explode;
      const targetY = finalY[index] + (1.5 - index) * scroll * 0.24;
      ref.current.position.z = MathUtils.damp(ref.current.position.z, targetZ, 5, delta);
      ref.current.position.y = MathUtils.damp(ref.current.position.y, targetY, 5, delta);
      ref.current.position.x = MathUtils.damp(ref.current.position.x, (index - 1.5) * scroll * 0.13, 5, delta);
    });

  });

  return (
    <group ref={group}>
      <group ref={screen}><ScreenLayer texture={finoviaTexture} /></group>
      <group ref={logic}><LogicLayer /></group>
      <group ref={data}><DataLayer /></group>
      <group ref={infra}><InfrastructureLayer /></group>
      <PeripheralElements />
    </group>
  );
}

export default function HeroScene({ active, reduceMotion }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 8.9], fov: 37, near: 0.1, far: 50 }}
      dpr={[1, 1.55]}
      frameloop={active ? "always" : "never"}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(new Color(INK), 0);
        scene.background = null;
      }}
    >
      <ambientLight intensity={0.42} />
      <directionalLight position={[-4, 6, 7]} intensity={3.2} color="#d9fbff" castShadow />
      <pointLight position={[5, 1, 4]} intensity={42} distance={14} color={CYAN} />
      <pointLight position={[-4, -2, 2]} intensity={30} distance={12} color={GREEN} />
      <Suspense fallback={null}>
        <Assembly reduceMotion={reduceMotion} />
      </Suspense>
    </Canvas>
  );
}
