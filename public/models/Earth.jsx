// Earth.jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/earth.gltf')
  const earthRef = useRef()

  // Add rotation animation
  useFrame((state, delta) => {
    earthRef.current.rotation.x += delta * 0.5 // Adjust rotation speed here
  })

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.Object_4.geometry} 
        material={materials['Scene_-_Root']} 
        scale={1.128}
      />
    </group>
  )
}

useGLTF.preload('/models/earth.gltf')