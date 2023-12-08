import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  SwipeableDrawer,
  Grid,
} from "@mui/material";
import { motion, stagger, useAnimate } from "framer-motion";
import Lottie from "lottie-react";
import Header from "../Headers/Header";
import videoBg from "../../assets/videoBg.mp4";
import StyleHeader from "../../content/content";
import animationBlackWire from "../../assets/animationBlackWire.json";
import CancelIcon from '@mui/icons-material/Cancel';
import "./HomeLander.scss";
import "../Headers/Header.scss";
import ProductLander from "../Products/ProductLander";

const Main = ({ drawer, handleDrawer }) => {
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
      <SwipeableDrawer
        anchor="right"
        open={drawer}
        className="main-drawer"
        onClose={() => handleDrawer(false)}
        onOpen={() => handleDrawer(true)}
      >
        <Grid  className="main-sidebar">
          {StyleHeader.map((head, idx) => {
            return (
              <Grid className="header-logo-sb sidebar-grid" key={idx}>
                <span>{head.label}</span>
              </Grid>
            );
          })}
        </Grid>
        <CancelIcon className="drawer-icon" onClick={()=>handleDrawer(false)}/>
      </SwipeableDrawer>
    </Box>
  );
};

const HomeLander = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  const [showWeb, setShowWeb] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const isMobile = windowDimension <= 900;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(()=>{
    if(drawer && isMobile){
      setDrawer(false)
    }
  },[isMobile])

  const handleDrawer = (cn) => {
    setDrawer(cn);
  };

  const render = () => {
    return showWeb ? (
      <>
        <Header handleDrawer={handleDrawer} isMobile={isMobile}/>
        <Main drawer={ drawer && isMobile} handleDrawer={handleDrawer} isM/>
        <ProductLander/>
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
