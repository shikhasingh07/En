import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Header.scss";
import StyleHeader from "../../content/content";
const Header = ({ handleDrawer, isMobile }) => {
  return (
    <Grid
      container
      sx={{ height: 95 }}
      columnGap={3}
      className="header-container"
    >
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
        <Grid item sm={3} xs={3} className="mobile-version">
          <span onClick={() => handleDrawer(true, isMobile)}>
            <BlurOnIcon sx={{ color: "white" }} />
          </span>
        </Grid>
      ) : (
        <>
          {StyleHeader.map((head, idx) => {
            return (
              <Grid className="header-logo-sb" item md={2} key={idx}>
                <span>{head.label}</span>
              </Grid>
            );
          })}
        </>
      )}
    </Grid>
  );
};

export default Header;
