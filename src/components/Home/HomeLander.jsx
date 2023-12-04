import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, stagger, useAnimate } from "framer-motion";
import Lottie from "lottie-react";
import Header from "../Headers/Header";
import videoBg from "../../assets/videoBg.mp4";
import animationBlackWire from "../../assets/animationBlackWire.json";
import "./HomeLander.scss";
import "../Headers/Header.scss";


const Main = () => {
  return (
    <Box className="main-lander">
      <video src={videoBg} autoPlay loop muted />
      <Box
        sx={{
          position: "absolute",
          color: "#fff",
          top: "30%",
          left: "0",
          width: "100%",
        }}
      >
        <div className="main-title">
          <Typography>A Intelligent Drone Company</Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="watch-File"
          >
            <span> Watch Film</span>
          </motion.div>
        </div>
      </Box>
    </Box>
  );
};

const HomeLander = () => {
  const [showWeb, setShowWeb] = useState(false);

  const render = () => {
    return showWeb ? (
      <>
        <Header />
        <Main />
      </>
    ) : (
      <Lottie
        animationData={animationBlackWire}
        style={{
          height: "65vh",
          marginTop: "5rem",
        }}
        onComplete={() => setShowWeb(true)}
        loop={false}
      />
    );
  };
  return render();
};

export default HomeLander;
