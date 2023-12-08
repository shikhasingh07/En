import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import ProductModel from "./ProductModel";
import "./productStyle.scss";
import { motion, stagger, useAnimate } from "framer-motion";
const ProductLander = () => {
  return (
      <Grid container sx={{ height: "100vh" }}>
        <Grid xs={6} item bgcolor="#096468" p="2rem 4rem">
          <h1 className="product-title">We SERVE AI INTERGRATED TECHNOLOGY</h1>
          <div class="rightbox">
            <div class="rb-container">
              <ul class="rb">
                <li class="rb-item" ng-repeat="itembx">
                  <div class="item-title">
                    <span>Watch IN 360</span>
                  </div>
                </li>
                <li class="rb-item" ng-repeat="itembx">
                  <div class="item-title">
                    <span>Photo Gallery</span>
                  </div>
                </li>
                <li class="rb-item" ng-repeat="itembx">
                  <div class="item-title">
                    <span>Watch Film</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="about-us"
          >
            <span className="about-us-watch-film">About Us</span>
          </motion.div>
        </Grid>
        <Grid
          xs={6}
          item
          sx={{
            display:'flex',
            justifyContent: "center",
            alignItems:'center'
          }}
        >
          <Canvas>
            <color attach="background" args={["#213547"]} />
            <ProductModel />
          </Canvas>
        </Grid>
      </Grid>
  );
};

export default ProductLander;
