import {useState, useEffect,useRef}from'react'
import { Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Marker(){
  const[clicked,setClicked]=useState(false)
  const markerRef=useRef(null)
  const vec = new THREE.Vector3()

  useFrame(state =>{
    if(clicked){
      state.camera.lookAt(markerRef.current.position)
      state.camera.position.lerp(vec.set(0,0,0),0.01)
      state.camera.updateProjectionMatrix()
    }
    return null;
  })

  return(
    
    <mesh
      ref={markerRef}
      onClick={()=>setClicked(!clicked)}
    >
      <coneBufferGeometry attach='geometry' args={[1,5,20]}></coneBufferGeometry>
      <meshBasicMaterial attach='material' color='red'></meshBasicMaterial>
    </mesh>
  )
}