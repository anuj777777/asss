import React from "react";
import { Card, CardContent, Box, Typography, Avatar } from "@mui/material";
import img1 from "../assets/ass.png"
const ReviewCard = () => {

  const name = "Gurmeet Singh ";

  return (
    <Card
      sx={{
        maxWidth: "300px",
        fontFamily: "Poppins, sans-serif",
        background: "#9EADFF",
        marginTop:"20px",
        padding: "1rem",
        alignSelf: "center",
        width: "100%",
        color: "#fff",
        borderRadius: "20px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "0px !important",
        }}
      >
        <Typography variant="body1">
          Collegedunia is a one-stop solution to all your education related
          queries.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Avatar src={img1} alt={name} />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
            }}
          >
            {name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
