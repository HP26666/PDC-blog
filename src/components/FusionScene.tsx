import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ---- Plasma Core (pulsing sphere) ---- */
function PlasmaCore() {
  const ref = useRef<THREE.Mesh>(null!);
  const mat = useRef<THREE.ShaderMaterial>(null!);

  const shader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vNormal = normal;
        vPosition = position;
        float displacement = sin(position.x * 4.0 + uTime * 2.0) *
                             sin(position.y * 4.0 + uTime * 1.5) *
                             sin(position.z * 4.0 + uTime * 1.8) * 0.05;
        vec3 newPos = position + normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
        vec3 plasmaBlue = vec3(0.0, 0.824, 1.0);
        vec3 energyPurple = vec3(0.616, 0.314, 0.733);
        float mix_factor = sin(uTime * 0.5 + vPosition.y * 3.0) * 0.5 + 0.5;
        vec3 color = mix(plasmaBlue, energyPurple, mix_factor);
        float alpha = 0.6 + fresnel * 0.4;
        float pulse = sin(uTime * 3.0) * 0.1 + 0.9;
        gl_FragColor = vec4(color * pulse, alpha);
      }
    `,
  }), []);

  useFrame(({ clock }) => {
    mat.current.uniforms.uTime.value = clock.elapsedTime;
    const s = 1 + Math.sin(clock.elapsedTime * 2) * 0.03;
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.6, 64, 64]} />
      <shaderMaterial
        ref={mat}
        args={[shader]}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ---- Wireframe Earth ---- */
function WireframeEarth() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.15;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 2]} />
      <meshBasicMaterial color="#00d2ff" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

/* ---- Orbiting Particle ---- */
function OrbitingParticle({
  color,
  radius,
  speed,
  offset,
  size,
  tilt,
}: {
  color: string;
  radius: number;
  speed: number;
  offset: number;
  size: number;
  tilt: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const trailRef = useRef<THREE.Points>(null!);
  const trailCount = 30;

  const trailPositions = useMemo(() => new Float32Array(trailCount * 3), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + offset;
    const x = Math.cos(t) * radius;
    const y = Math.sin(t) * radius * Math.sin(tilt);
    const z = Math.sin(t) * radius * Math.cos(tilt);
    ref.current.position.set(x, y, z);

    // Update trail
    for (let i = trailCount - 1; i > 0; i--) {
      trailPositions[i * 3] = trailPositions[(i - 1) * 3];
      trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1];
      trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2];
    }
    trailPositions[0] = x;
    trailPositions[1] = y;
    trailPositions[2] = z;

    if (trailRef.current) {
      trailRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Glow halo */}
      <mesh ref={(m) => { if (m) { ref.current && m.position.copy(ref.current.position); } }}>
        <sphereGeometry args={[size * 2.5, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
      {/* Trail */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[trailPositions, 3]}
            count={trailCount}
          />
        </bufferGeometry>
        <pointsMaterial color={color} size={0.02} transparent opacity={0.4} sizeAttenuation />
      </points>
    </>
  );
}

/* ---- Particle Field ---- */
function ParticleField() {
  const count = 500;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color="#00d2ff" size={0.015} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

/* ---- Main Scene ---- */
export default function FusionScene() {
  return (
    <group>
      <PlasmaCore />
      <WireframeEarth />
      {/* H-1 Protium - Plasma Blue */}
      <OrbitingParticle color="#00d2ff" radius={2.0} speed={0.8} offset={0} size={0.08} tilt={0.3} />
      {/* H-2 Deuterium - Energy Purple */}
      <OrbitingParticle color="#9d50bb" radius={2.3} speed={0.6} offset={2.1} size={0.1} tilt={1.2} />
      {/* H-3 Tritium - Mixed glow */}
      <OrbitingParticle color="#ff6bcb" radius={2.6} speed={0.4} offset={4.2} size={0.12} tilt={-0.8} />
      <ParticleField />
    </group>
  );
}
