import { Box } from "@mui/material";
import React from "react";
import NextCard from "../PageCards/NextCard";
import bacground from "../assets/loginbackground.png";
const Next = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <img
        src={bacground}
        alt="background"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      />
      <NextCard />
    </Box>
  );
};

export default Next;
