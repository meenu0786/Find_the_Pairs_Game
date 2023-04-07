import React from "react";
import { Grid, Box } from "@mui/material";
import CardSection from "../CardSection";
import { cardGrid, getColItem, getRowItem } from "../../utils/Constants";

const index = ({
  cards,
  shouldDisableAllCards,
  handleCardClick,
  firstRender,
  openCards,
  clearedCards,
}) => {
  const colItem = getColItem(cards?.length);
  const rowItem = getRowItem(cards?.length);

  const checkIsFlipped = (index) => openCards.includes(index);
  const checkIsInactive = (card) => Boolean(clearedCards[card.type]);

  return (
    <Grid item xs={8}>
      <Box
        sx={{
          ...cardGrid,
          "--col": colItem,
          "--row": rowItem,
        }}
      >
        {cards.map((card, index) => (
          <CardSection
            key={index}
            card={card}
            index={index}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(card)}
            isFlipped={checkIsFlipped(index)}
            onClick={handleCardClick}
            firstRender={firstRender}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default index;
