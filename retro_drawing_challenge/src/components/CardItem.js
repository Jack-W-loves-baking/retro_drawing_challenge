import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Back } from "./back";
import { Front } from "./Front";
import { makeStyles } from "@mui/styles";

export const CardItem = ({ frontTitle, backWord }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={classes.card}>
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={isFlipped}
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <Front title={frontTitle} key="front" onClick={handleClick} />
        <Back word={backWord} key="back" onClick={handleClick} />
      </ReactCardFlip>
    </div>
  );
};

const useStyles = makeStyles({
  card: {
    margin: 8,
  },
});
