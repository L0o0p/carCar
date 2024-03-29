/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 seperate.glb 
*/

import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sport_car/seperate.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {/* 车壳 */}
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.CarBody_1_Car_Paint_2_0.geometry} material={materials.Car_Paint_2} />
          <mesh geometry={nodes.CarBody_1_Car_Paint_0.geometry} material={materials.Car_Paint} />
          <mesh geometry={nodes.CarBody_1_Car_Paint_0002.geometry} material={materials.Car_Paint} />
          <mesh geometry={nodes.CarBody_1_Car_Paint_0005.geometry} material={materials.Car_Paint} />
          {/* <mesh geometry={nodes.CarBody_1_Car_Paint_0003_2.geometry} material={materials.Side_Mirrors} /> */}
          {/* <mesh geometry={nodes.CarBody_2_Interior_0002_3.geometry} material={materials.Side_Mirrors} /> */}
        </group>


        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.CarBody_2_Blinker_Glass_Cover_0.geometry} material={materials.Blinker_Glass_Cover} />
          <mesh geometry={nodes.CarBody_2_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.CarBody_2_CorvetteWingEmblem_0.geometry} material={materials.CorvetteWingEmblem} />
          <mesh geometry={nodes.CarBody_2_Daylight_Cover_0.geometry} material={materials.Daylight_Cover} />
          <mesh geometry={nodes.CarBody_2_Exhaust_Housing_0.geometry} material={materials.Exhaust_Housing} />
          <mesh geometry={nodes.CarBody_2_Exhaust_0.geometry} material={materials.Exhaust} />
          <mesh geometry={nodes.CarBody_2_Glossy_Plastic_0.geometry} material={materials.Glossy_Plastic} />
          <mesh geometry={nodes.CarBody_2_Headlight_Cover_0.geometry} material={materials.Headlight_Cover} />
          <mesh geometry={nodes.CarBody_2_Interior_0.geometry} material={materials.Interior} />
          <mesh geometry={nodes.CarBody_2_Main_Headlight_Lens_0.geometry} material={materials.Main_Headlight_Lens} />
          <mesh geometry={nodes.CarBody_2_Mesh_0.geometry} material={materials.Mesh} />
          <mesh geometry={nodes.CarBody_2_Plastic_0.geometry} material={materials.Plastic} />
          <mesh geometry={nodes.CarBody_2_Reflectors_0.geometry} material={materials.Reflectors} />
          <mesh geometry={nodes.CarBody_2_Rubber_0.geometry} material={materials.Rubber} />
          <mesh geometry={nodes.CarBody_2_Shadow_0.geometry} material={materials.Shadow} />
          <mesh geometry={nodes.CarBody_2_Side_Reflectors_Cover_0.geometry} material={materials.Side_Reflectors_Cover} />
          <mesh geometry={nodes.CarBody_2_Spoiler_Light_Cover_0.geometry} material={materials.Spoiler_Light_Cover} />
          <mesh geometry={nodes.CarBody_2_Tail_Lights_Red_Cover_2_0.geometry} material={materials.Tail_Lights_Red_Cover_2} />
          <mesh geometry={nodes.CarBody_2_Tail_Lights_Red_Cover_0.geometry} material={materials.Tail_Lights_Red_Cover} />
          <mesh geometry={nodes.CarBody_2_Tail_Lights_White_Cover_0.geometry} material={materials.Tail_Lights_White_Cover} />
          <mesh geometry={nodes.CarBody_2_WindowBorder_0.geometry} material={materials.WindowBorder} />
          <mesh geometry={nodes.CarBody_2_Windows_0.geometry} material={materials.Windows} />
          <mesh geometry={nodes.CarBody_2_Wipers_0.geometry} material={materials.Wipers} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.License_Plate_License_Plate_0.geometry} material={materials.License_Plate} />
          <mesh geometry={nodes.License_Plate_LicensePlate_Frame_0.geometry} material={materials.LicensePlate_Frame} />
        </group>
        <group position={[160.137, 76.367, 268.656]} rotation={[2.199, Math.PI / 2, 0]} scale={[100, 100, 101.808]}>
          <mesh geometry={nodes.Rim_FL_CorvetteWingEmblem_0.geometry} material={materials.CorvetteWingEmblem} />
          <mesh geometry={nodes.Rim_FL_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
          <mesh geometry={nodes.Rim_FL_Rim_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Brake_Disc_FL_Brake_Disc_0.geometry} material={materials.Brake_Disc} rotation={[0, 0, 2.513]} scale={0.402} />
          <mesh geometry={nodes.Tire_FL_TireMaterial_0.geometry} material={materials.TireMaterial} rotation={[Math.PI / 2, 0.942, Math.PI / 2]} />
        </group>
        <group position={[-159.931, 76.367, 268.656]} rotation={[-2.199, -Math.PI / 2, 0]} scale={[100, 100, 101.808]}>
          <mesh geometry={nodes.Rim_FR_CorvetteWingEmblem_0.geometry} material={materials.CorvetteWingEmblem} />
          <mesh geometry={nodes.Rim_FR_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
          <mesh geometry={nodes.Rim_FR_Rim_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Brake_Disc_FR_Brake_Disc_0.geometry} material={materials.Brake_Disc} rotation={[0, 0, 2.513]} scale={0.402} />
          <mesh geometry={nodes.Tire_FR_TireMaterial_0.geometry} material={materials.TireMaterial} rotation={[Math.PI / 2, 0.942, Math.PI / 2]} />
        </group>
        <group position={[160.137, 76.367, -270.477]} rotation={[2.199, Math.PI / 2, 0]} scale={[100, 100, 101.808]}>
          <mesh geometry={nodes.Rim_RL_CorvetteWingEmblem_0.geometry} material={materials.CorvetteWingEmblem} />
          <mesh geometry={nodes.Rim_RL_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
          <mesh geometry={nodes.Rim_RL_Rim_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Brake_Disc_RL_Brake_Disc_0.geometry} material={materials.Brake_Disc} rotation={[0, 0, 2.513]} scale={0.402} />
          <mesh geometry={nodes.Tire_RL_TireMaterial_0.geometry} material={materials.TireMaterial} rotation={[Math.PI / 2, 0.942, Math.PI / 2]} />
        </group>
        <group position={[-159.931, 76.367, -270.477]} rotation={[-2.199, -Math.PI / 2, 0]} scale={[100, 100, 101.808]}>
          <mesh geometry={nodes.Rim_RR_CorvetteWingEmblem_0.geometry} material={materials.CorvetteWingEmblem} />
          <mesh geometry={nodes.Rim_RR_Lug_Nuts_0.geometry} material={materials.Lug_Nuts} />
          <mesh geometry={nodes.Rim_RR_Rim_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Brake_Disc_RR_Brake_Disc_0.geometry} material={materials.Brake_Disc} rotation={[0, 0, 2.513]} scale={0.402} />
          <mesh geometry={nodes.Tire_RR_TireMaterial_0.geometry} material={materials.TireMaterial} rotation={[Math.PI / 2, 0.942, Math.PI / 2]} />
        </group>

        {/* 刹车片 */}
        <mesh geometry={nodes.Brake_Caliper_FL_Brake_Caliper_0.geometry} material={materials.Brake_Caliper} position={[-159.931, 76.367, 270.737]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[106.859, 106.859, 108.79]} />
        <mesh geometry={nodes.Brake_Caliper_FR_Brake_Caliper_0.geometry} material={materials.Brake_Caliper} position={[-159.931, 76.367, 270.737]} rotation={[-Math.PI / 2, -1.571, 0]} scale={[106.859, 106.859, 108.79]} />
        <mesh geometry={nodes.Brake_Caliper_RL_Brake_Caliper_0.geometry} material={materials.Brake_Caliper} position={[-159.931, 76.367, 270.737]} rotation={[-Math.PI / 2, -1.571, 0]} scale={[106.859, 106.859, 108.79]} />
        <mesh geometry={nodes.Brake_Caliper_RR_Brake_Caliper_0.geometry} material={materials.Brake_Caliper} position={[-159.931, 76.367, 270.737]} rotation={[-Math.PI / 2, -1.571, 0]} scale={[106.859, 106.859, 108.79]} />

        {/* 车底 */}
        <mesh geometry={nodes.CarBody_3_Undercarriage_0.geometry} material={materials.Undercarriage} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/sport_car/seperate.glb')
