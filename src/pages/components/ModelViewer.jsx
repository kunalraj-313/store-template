import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../../../public/models/Earth";

export default function ModelViewer(props) {
  const { type } = props;
  return (
    <div>
      <Canvas
        style={{
          height: type == "navbar" ? "150px" : "300px",
        }}
      >
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth customScale={type == "navbar" ? 2.5 : 2.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
