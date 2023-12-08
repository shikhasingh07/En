import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Environment, OrbitControls,
  Stage,
  useFBX,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
const ProductModel = () => {
  const fbx = useFBX("../../../public/models/drone1.fbx");
  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[-0.1, Math.PI / 4]}
      zoom={0.1}
    >
      <Stage environment="city" intensity={1.2} castShadow={false}>
        <primitive object={fbx} scale={0.01} />;
        <OrbitControls />
        <Environment preset="sunset" background />
      </Stage>
    </PresentationControls>
  );
};

export default ProductModel;
{
  /* <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh> */
}
