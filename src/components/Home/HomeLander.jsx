import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  SwipeableDrawer,
  Grid,
  Button,
} from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { motion, stagger, useAnimate } from "framer-motion";
import Lottie from "lottie-react";
import Header from "../Headers/Header";
import animationBlackWire from "../../assets/animationBlackWire.json";
import ProductLander from "../Products/ProductLander";
import WatchLive from "../Products/WatchLive";
import Main from "./Main";
import { NotFound } from "../NotFound/NotFound";
import Support from '../Support/Support'
import "./HomeLander.scss";
import "../Headers/Header.scss";

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

  useEffect(() => {
    if (drawer && isMobile) {
      setDrawer(false);
    }
  }, [isMobile]);

  const handleDrawer = (cn) => {
    setDrawer(cn);
  };

  const render = () => {
    return showWeb ? (
      <>
        <Header handleDrawer={handleDrawer} isMobile={isMobile} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                drawer={drawer && isMobile}
                isMobile={isMobile}
                handleDrawer={handleDrawer}
              />
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/watchlive" element={<WatchLive />} />
          <Route path='/support' element={<Support/>}/>
        </Routes>
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
