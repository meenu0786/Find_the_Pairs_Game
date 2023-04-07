import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { cardsArray, shuffleCards } from "./utils/Constants";
import "./App.css";
import MainSection from "./components/MainSection";
import ScoreBoard from "./components/ScoreBoard";

let initialCardsArray = shuffleCards(cardsArray.splice(10));

function App() {
  const [cards, setCards] = useState(initialCardsArray);
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [option, setOption] = useState(10);
  const [firstRender, setfirstRender] = useState(true);

  const timeout = useRef(null);

  const disable = () => setShouldDisableAllCards(true);
  const enable = () => setShouldDisableAllCards(false);
  const getScore = () => Object.entries(clearedCards).length;
  const getScoreTotal = () => cards.length / 2;

  // To set all pairs found
  const checkCompletion = useCallback(() => {
    if (Object.keys(clearedCards).length === cards.length / 2) {
      setShowModal(true);
    }
  }, [clearedCards, cards.length]);

  // Matches for the same card
  const evaluate = useCallback(() => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  }, [cards, openCards]);

  // Handle the click on card
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  // Rearrange and increase the array length according to option pair
  const getFilteredArray = useCallback(() => {
    const tempArray = cardsArray.slice(0, option);
    initialCardsArray = shuffleCards([...tempArray, ...tempArray]);
    setCards(initialCardsArray);
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    return initialCardsArray;
  }, [option]);

  useEffect(() => {
    // Open the card for first time
    setfirstRender(true);
    getFilteredArray();
    let timerId = setTimeout(() => {
      setfirstRender(false);
    }, 5000);
    return () => clearInterval(timerId);
  }, [option, getFilteredArray]);

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards, evaluate]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards, checkCompletion]);

  const restartHandler = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(getFilteredArray());
    setOption(10);
  };
  return (
    <Box className="Box">
      <Container maxWidth="lg">
        <Typography className="Typography" variant="h4" align="center">
          Find the pairs
        </Typography>
        <Grid container spacing={3}>
          <MainSection
            cards={cards}
            shouldDisableAllCards={shouldDisableAllCards}
            handleCardClick={handleCardClick}
            firstRender={firstRender}
            openCards={openCards}
            clearedCards={clearedCards}
          />
          <ScoreBoard
            moves={moves}
            getScore={getScore}
            getScoreTotal={getScoreTotal}
            option={option}
            setOption={setOption}
            showModal={showModal}
            handleRestart={restartHandler}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
