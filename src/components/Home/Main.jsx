import {
  Box,
  Typography,
  SwipeableDrawer,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { motion, stagger, useAnimate } from "framer-motion";
import {StyleHeader} from "../../content/content";
import CancelIcon from "@mui/icons-material/Cancel";
import ProductLander from "../Products/ProductLander";
import WatchLive from "../Products/WatchLive";
import droneOne from '../../assets/droneOne.mp4'
import "./HomeLander.scss";
import "../Headers/Header.scss";

const Main = ({ isMobile, drawer, handleDrawer }) => {
    const navigate = useNavigate();
    const handlePageLive = () => {
      navigate('watchlive')
    };
    
    return (
      <>
        <Box className="main-lander">
          <video src={droneOne} autoPlay loop muted />
          <Box
            sx={{
              position: "absolute",
              color: "#fff",
              top: "30%",
              left: "0",
              width: "100%",
            }}
          >
            <Button className="live-btn" onClick={handlePageLive}>
              Watch Live
            </Button>
            <div className="main-title">
              <Typography>A Intelligent Drone Company</Typography>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="watch-File"
              >
                <span>Watch Film</span>
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
            <Grid className="main-sidebar">
              {StyleHeader.map((head, idx) => {
                return (
                  <Grid className="header-logo-sb sidebar-grid" key={idx}>
                    <span onClick={()=>navigate(head.navigate)}>{head.label}</span>
                  </Grid>
                );
              })}
            </Grid>
            <CancelIcon
              className="drawer-icon"
              onClick={() => handleDrawer(false)}
            />
          </SwipeableDrawer>
        </Box>
        <ProductLander isMobile={isMobile}/>
      </>
    );
  };
export default Main