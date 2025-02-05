// Earth.jsx
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/earth.gltf");
  const earthRef = useRef();
  const { customScale } = props;
  // Add rotation animation
  useFrame((state, delta) => {
    earthRef.current.rotation.x += delta * 0.5; // Adjust rotation speed here
  });

  return (
    <group ref={earthRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={customScale}
      />
    </group>
  );
}

useGLTF.preload("/models/earth.gltf");
