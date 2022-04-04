import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Front = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography align="center" variant="h3" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2">{description}</Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};
