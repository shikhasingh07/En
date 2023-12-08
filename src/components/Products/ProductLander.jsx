import React from "react";
import { Box } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
// import { Box } from "framer-motion";
import ProductModel from "./ProductModel";
const ProductLander = () => {
  return (
    <Box sx={{height:'100vh' }}> 
      <Canvas>
        <color attach="background" args={["#213547"]} />
        <ProductModel />
      </Canvas>
    </Box>
  );
};

export default ProductLander;
