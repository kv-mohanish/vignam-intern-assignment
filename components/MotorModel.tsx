"use client";

import { GroupProps, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function MotorModel(props: GroupProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/assets/landing_page_motor.glb");

  // Simple rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  // Apply material tweaks only once
  useMemo(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        if ("metalness" in obj.material) obj.material.metalness = 1;
        if ("roughness" in obj.material) obj.material.roughness = 0.2;
        if ("envMapIntensity" in obj.material) obj.material.envMapIntensity = 1.2;
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/assets/landing_page_motor.glb");
