import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import PropTypes from 'prop-types';
import './styles/ModelViewer.css';

function Model({ modelPath, materialPath }) {
  const materials = useLoader(MTLLoader, materialPath);
  const obj = useLoader(OBJLoader, modelPath, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={obj} scale={0.02} />;
}

Model.propTypes = {
  modelPath: PropTypes.string.isRequired
};

function ModelViewer({ modelPath = '/models/ring.obj' , materialPath = '/models/ring.mtl'}) {
  return (
    <div className="model-viewer">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.5} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}

ModelViewer.propTypes = {
  modelPath: PropTypes.string
};

export default ModelViewer;
