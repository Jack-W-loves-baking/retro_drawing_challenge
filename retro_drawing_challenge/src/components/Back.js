import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Back = ({ word, onClick }) => {
  return (
    <div onClick={onClick}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography color="teal" align="center" variant="h3" component="div">
            {word}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
