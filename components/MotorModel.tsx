// components/MotorModel.tsx
"use client";

import { GroupProps, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function MotorModel(props: GroupProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/assets/landing_page_motor.glb");

  // Example animation: rotate model slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model for performance
useGLTF.preload("/assets/landing_page_motor.glb");
