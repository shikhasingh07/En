import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  OrbitControls,
  Environment
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
const ProductModel = () => {
  const fbx = useLoader(FBXLoader, "../../../models/drone1.fbx");
  return (
    <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}>
      <Stage environment="city" intensity={1.2} castShadow={false}>
        <Suspense fallback={null}>
          <OrbitControls />
          <primitive object={fbx} scale={0.002} />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Stage>
    </PresentationControls>
  );
};

export default ProductModel;
