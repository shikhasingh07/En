import {
    Box,
    Container,
    Typography,
    SwipeableDrawer,
    Grid,
    Button,
  } from "@mui/material";
export const NotFound = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Typography sx={{ color: "#15999e" }}>Snapp ! Wrong Page</Typography>
        <Typography sx={{ color: "#15999e" }}>Click Logo or Nav Link</Typography>
      </Box>
    );
  };