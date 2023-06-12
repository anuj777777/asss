import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ title }) => {
  return (
    <Button
      variant="text"

      sx={{
        width: "150px",
        backgroundColor: "#9EADFF",
        borderRadius: "10px",
        padding: "8px 20px",
        color: "#fff",
        textAlign:"center",
        justifyContent:"center",
        transition: "color 0.3s ease",
        fontSize: "0.875rem",
        "&:hover": {
          color: "#2f1370",
          backgroundColor: "#fff",
          transition: "color 0.3s ease",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
