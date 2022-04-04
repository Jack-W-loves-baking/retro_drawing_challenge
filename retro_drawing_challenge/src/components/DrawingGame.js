import React, { useState } from "react";
import { CardItem } from "./CardItem";
import { cardData } from "../constants";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

export const DrawingGame = () => {
  const [diffLevel, setDiffLevel] = useState(1);
  const classes = useStyles();
  const minimumDiff = 1;
  const maximumDiff = 3;

  const handleIncrease = () => {
    if (diffLevel == maximumDiff) return;
    const newValue = diffLevel + 1;
    setDiffLevel(newValue);
  };

  const handleDecrease = () => {
    if (diffLevel == minimumDiff) return;
    const newValue = diffLevel - 1;
    setDiffLevel(newValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.cardItems}>
        {cardData
          .filter((card) => card.level === diffLevel)
          .map((card) => {
            return (
              <CardItem
                key={card.id}
                frontTitle={card.id}
                backWord={card.word}
              />
            );
          })}
      </div>
      <p>Current difficulty level: {diffLevel} </p>
      <Button onClick={handleIncrease}>Increase Difficulty</Button>
      <Button onClick={handleDecrease}>Decrease Difficulty</Button>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    // backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 30,
    maxWidth: "70%",
  },
});
