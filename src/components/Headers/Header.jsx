import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BlurOnIcon from '@mui/icons-material/BlurOn';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./Header.scss";
const Header = () => {
  const [windowDimension, setWindowDimension] = useState(null);

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

  const isMobile = windowDimension <= 900;

  return (
    <Grid container sx={{ height: 75 }} columnGap={3} className="header-container">
      {/* /Logo/ */}
      <Grid
        className="header-logo"
        item
        xs={8}
        sm={8}
        md={4}
        justifyContent="start"
        pl="3rem"
      >
        <span>Enddrone</span>
      </Grid>
      {isMobile ? (
        <Grid item  xs={3} className="mobile-version">
        <span><BlurOnIcon sx={{color:'white'}}/></span>
        </Grid>
      ) : (
        <>
          <Grid className="header-logo-sb" item md={2}>
            <span>Products</span>
          </Grid>

          <Grid className="header-logo-sb" item md={2}>
            <span>Innovation</span>
          </Grid>

          <Grid className="header-logo-sb" item md={2}>
            <span>Support</span>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Header;
