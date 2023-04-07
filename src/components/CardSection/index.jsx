import React from "react";
import classnames from "classnames";
import { Box } from "@mui/material";
import "../../styles/CardSection.scss";
import QuestionMarkCard from "../QuestionMarkCard";

const index = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
  isDisabled,
  firstRender,
}) => {
  const clickHandler = () => !isFlipped && !isDisabled && onClick(index);
  return (
    <Box
      className={classnames("card", {
        "is-flipped": isFlipped || firstRender,
        "is-inactive": isInactive,
      })}
      onClick={clickHandler}
    >
      <Box className="card-front-face">
        <QuestionMarkCard />
      </Box>
      <Box className="card-back-face">
        <img src={card.image} alt="card" />
      </Box>
    </Box>
  );
};

export default index;
