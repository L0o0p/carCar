import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import CarRest from './CarRest'
import CarLdoor from './CarLdoor'
import CarRdoor from './CarRdoor'
import { useState } from'react'
import { useSpring, a } from '@react-spring/three';
// import { M } from 'vite/dist/node/types.d-FdqQ54oU'

export  function Car(props) {
    const [clicked, click] = useState(false)
    const [clickedL, clickL] = useState(false)
    const x = 1.6;
    const y = 0;
    const z = -.8;
    
    const xa =  1.6;
    const ya =  0;
    const za =  0.8;

    const { rotation: rotationR } = useSpring({
        rotation: clicked ? [0, Math.PI / 3, 0] : [0, 0, 0],
    });
    const { rotation: rotationL } = useSpring({
        rotation: clickedL ? [0, -Math.PI / 3, 0] : [0, 0, 0],
    });

    const [onLight,setOnLight] = useState(false);
    const lightIntensity = onLight? 1000:1000;

    function onCarClick() {
        setOnLight(!onLight)

    }
        

    return(
        <>
        {/* 右门 */}
        <a.group position={[0-x, 0-y, 0-z]}
            rotation={rotationR} 
            onClick={(event) => click(!clicked)}
        >
          <group position={[0+x, 0+y, 0+z]}>
              <CarRdoor  />
          </group>
        </a.group>
      
        {/* 左门 */}
        <a.group position={[0+xa, 0+ya, 0+za]}
            rotation={rotationL} 
            onClick={(event) => clickL(!clickedL)}
        >
          <group position={[0-xa, 0-ya, 0-za]}>
            <CarLdoor />
          </group>
        </a.group>

        {/* 车身 */}
        <group onClick={onCarClick}>
        <CarRest />
        </group>

        <group>
        {/* <pointLight color="blue" position={[0, 1.2, 0]} intensity={200}/> */}
        <pointLight color="blue" position={[0, 1.7, 0]} intensity={lightIntensity}/>
        <pointLight color="blue" position={[0+0.8, 1.7, 0+.5]} intensity={lightIntensity}/>
        <pointLight color="blue" position={[0-0.8, 1, 0+.4]} intensity={lightIntensity}/>
        </group>
        
     
        
        </>
    )
}