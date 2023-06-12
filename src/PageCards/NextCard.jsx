import { Box } from "@mui/material";
import React from "react";
import LeftCard from "../components/LeftCard";
import Next from "../components/Next";
const NextCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "900px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        gap: "1rem",
      }}
    >
      <LeftCard />
      <Next />
    </Box>
  );
};

export default NextCard;
