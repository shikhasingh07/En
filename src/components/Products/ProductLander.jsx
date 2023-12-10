import React, { useState } from "react";
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
const ProductLander = ({ isMobile }) => {
  const [selectedPhase, setSeletecPahse] = useState();
  return (
    <Grid container>
      <Grid xs={isMobile ? 12 : 6} item bgcolor="#096468">
        <div className="product-labour">
          <h1 className="product-title">We SERVE AI INTERGRATED TECHNOLOGY</h1>
          <div className="rightbox">
            <div className="rb-container">
              <ul className="rb">
                <li className="rb-item" ng-repeat="itembx">
                  <div className="item-title">
                    <span>Watch IN 360˚</span>
                  </div>
                </li>
                <li className="rb-item" ng-repeat="itembx">
                  <div className="item-title">
                    <span>Photo Gallery</span>
                  </div>
                </li>
                <li className="rb-item" ng-repeat="itembx">
                  <div className="item-title">
                    <span>Watch Film</span>
                  </div>
                </li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="about-us"
              >
                <span className="about-us-watch-film">About Us</span>
              </motion.div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid
        xs={isMobile ? 12 : 6}
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
