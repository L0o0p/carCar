import React, { useState, useEffect, useRef, useMemo, useImperativeHandle, useCallback } from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera, } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/three';

import { Environment } from './Environment/Environment.jsx';
import { Car } from './Car/Car.jsx';


const scenes = ['outdoor', 'indoor'];


const CameraMap = {
  'outdoor': {
    position: [0, 2.2, 0],
    target: [0, 0, 0],
    fov: 45,
  },
  'indoor': {
    position: [5, 5, 8],
    target: [0, 0, 0],
    fov: 65,
  }
}

const CustomizedCamera = (props: {
  scene: string,
}) => {
  const { scene } = props;
  const propties = useMemo(() => CameraMap[scene], [scene]);
  console.log(propties)
  const ref = useRef<THREE.PerspectiveCamera>(null);
  const reset = useCallback(() => {},[])
  return (<>
    {/* <PerspectiveCamera makeDefault fov={propties.fov || 45} /> */}
    <OrbitControls
      // target={propties.target}
      // position={propties.position}
      makeDefault={true}
      autoRotateSpeed={1}
    />
  </>)
}


function App() {
  const [active, setActive] = useState(false);
  const position = useMemo(() => {
    return active ? new THREE.Vector3(0, 2.2, 0) : new THREE.Vector3(5, 5, 8);
  }, [active]);
  return (
    <>
      <button onClick={() => setActive(!active)}>Toggle</button>
      <Canvas shadows={true} >
        <axesHelper args={[10]} />
        <directionalLight color="red" position={[0, 0, 5]} intensity={1} />
        <Environment />

        <CustomizedCamera scene={scenes[active? 1 : 0]} />

        <animated.group
          onClick={(event) => setActive(!active)}>
          <Car />
        </animated.group>
      </Canvas>
    </>
  );
}

export default App;