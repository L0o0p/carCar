import React, { useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls, OrbitControlsProps, PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';
import TWEEN from '@tweenjs/tween.js'
import { Environment } from './Environment/Environment.jsx';
import { Car } from './Car/Car.jsx';

function App() {
  const [active, setActive] = useState(false);
  const ref = useRef<any>(!null)

  // Define the spring-animated properties
  const { position } = useSpring({
    position: active ? [0.75, 1.8, -0.8] : [5, 5, 8],
    config: config.default
  });

  const handleClick = () => {
    setActive(!active);
    () => {
      new TWEEN.Tween(ref.current.target)
        .to(
          {
            x: 0,
            y: 3,
            z: 8
          },
          500
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
    }
  }

  return (
    <>
      <button onClick={() => setActive(!active)}>Toggle</button>
      <Canvas shadows={true} >
        <axesHelper args={[10]} />
        <directionalLight color="red" position={[0, 0, 5]} intensity={1} />
        <Environment />

        {/* Use the animated value for the camera */}
        <animated.group
          position={position.to((x, y, z) => [x, y, z])}
        >
          <PerspectiveCamera
            makeDefault={true}
            fov={active ? 80 : 60}
          />
        </animated.group>

        <OrbitControls
          ref={ref}
          target={active ? [0, 3, 8] : [0, 1, 0]} />

        <mesh position={[0, 3, 8]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        {/* Wrap the Car component in an animated.group */}
        <animated.group
          // onClick={() => setActive(!active)}
          onClick={handleClick}
        >
          <Car />
        </animated.group>
        <Tween />
      </Canvas>
    </>
  );
}

export default App;

function Tween() {
  useFrame(() => {
    TWEEN.update()
  })
  return null
}