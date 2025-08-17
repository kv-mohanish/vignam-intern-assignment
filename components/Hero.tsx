// File: components/Hero.tsx
"use client";

import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, OrbitControls, useGLTF } from "@react-three/drei";

const COPY = {
  hero: {
    title: "Precision CNC Parts Shipped as Fast as Tomorrow",
    highlight: "CNC",
    sub: "Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.",
    cta: "Upload your design",
  },
  leftStat: "12+ YEARS OF DELIVERING\nPERFECT DETAILS",
  rightStat: "OVER 100,000 PARTS\nMANUFACTURED ANNUALLY",
};

// 3D Model Component
function MotorModel(props: jsx.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/assets/landing_page_motor.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    scene.rotation.y = t * 0.25; // gentle rotation
  });

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

  return <primitive object={scene} {...props} />;
}

// Loader for the 3D canvas
function CanvasLoader() {
  return (
    <Html center>
      <div className="text-sm md:text-base text-neutral-700 bg-white/90 px-3 py-2 rounded-xl shadow">Loading 3D…</div>
    </Html>
  );
}

const Hero: React.FC = () => (
  <section className="relative">
    <div className="mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-12 lg:pt-14 pb-6">
      <div className="text-center">
        <h1 className="leading-tight tracking-tight font-semibold text-4xl md:text-5xl lg:text-6xl text-neutral-900">
          Precision <span className="italic font-serif font-normal">{COPY.hero.highlight}</span> Parts
          <br className="hidden md:block" /> Shipped as Fast as
          <br className="hidden md:block" /> Tomorrow
        </h1>
      </div>
      <div className="mt-8 md:mt-10 rounded-3xl border border-black/5 shadow-sm overflow-hidden bg-white">
        <div className="relative h-[50vh] md:h-[56vh] lg:h-[64vh]">
          <Canvas dpr={[1, 2]} camera={{ position: [0.6, 0.8, 2.2], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 4, 2]} intensity={1} castShadow />
            <Suspense fallback={<CanvasLoader />}> 
              <Environment files="/assets/forest.exr" background={false} />
              <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                <group position={[0, -0.2, 0]}>
                  <MotorModel />
                </group>
              </Float>
              <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.55}>
                <group position={[-2.2, -0.3, -0.1]} scale={0.55}>
                  <MotorModel />
                </group>
              </Float>
              <Float speed={0.95} rotationIntensity={0.22} floatIntensity={0.5}>
                <group position={[2.25, -0.25, 0.05]} scale={0.5}>
                  <MotorModel />
                </group>
              </Float>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <div className="px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 text-xs md:text-sm">
          <div className="whitespace-pre-wrap text-neutral-500">{COPY.leftStat}</div>
          <div className="col-span-2 md:col-auto text-center">
            <p className="text-neutral-700 max-w-md mx-auto mb-3">{COPY.hero.sub}</p>
            <a
              href="#upload"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
            >
              → {COPY.hero.cta}
            </a>
          </div>
          <div className="hidden md:block text-right whitespace-pre-wrap text-neutral-500">{COPY.rightStat}</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;