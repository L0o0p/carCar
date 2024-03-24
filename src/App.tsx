import React, { useState, useEffect, useRef, useMemo, useImperativeHandle, useCallback } from 'react';
import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

import { Environment } from './Environment/Environment.jsx';
import { Car } from './Car/Car.jsx';
import TWEEN from '@tweenjs/tween.js'




function App() {
  const [active, setActive] = useState(false);
  const props = useSpring({ position: active ? [0.75, 1.8, 0 - 0.8] : [5, 5, 8] })
  const camera = useRef<THREE.PerspectiveCamera>();


  return (
    <>
      <button onClick={() => setActive(!active)}>Toggle</button>
      <Canvas shadows={true} >
        <axesHelper args={[10]} />
        <directionalLight color="red" position={[0, 0, 5]} intensity={1} />
        <Environment />


        {/* <OrbitControls  target={[0, 1, 0]} />
        <PerspectiveCamera makeDefault position={[5, 5, 8]} /> */}
        <OrbitControls target={active ? [0, 3, 8] : [0, 1, 0]} />
        {/* <group position={active?[0.75, 1.8, 0-0.8]:[5,5,8]}> */}
        <PerspectiveCamera
          // ref={camera}
          makeDefault
          position={active ? [0.75, 1.8, 0 - 0.8] : [5, 5, 8]}
          fov={active ? 80 : 60}
        />
        {/* </group> */}

        <mesh position={[0, 3, 8]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>


        <animated.group
          onClick={(event) => setActive(!active)}>
          <Car />
        </animated.group>
      </Canvas>
      {/* <div id='ui'>{buttons }</div> */}
    </>
  );
}

export default App;

function Tween() {
  useFrame(() => {
    TWEEN.update()
  })
}