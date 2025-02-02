import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from '../../../public/models/Earth'

export default function ModelViewer() {
  return (
    <div>
      <Canvas style={{
        height:'200px'
      }}>
        <ambientLight/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Earth/>
        </Suspense>
      </Canvas>
    </div>
  )
}
