import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import ScoreModal from "../ScoreModal";
import Options from "../Options";
import "../../styles/ScoreBoard.scss";

const index = ({
  getScoreTotal,
  getScore,
  moves,
  setOption,
  option,
  showModal,
  handleRestart,
}) => {
  return (
    <>
      <Grid item xs={4}>
        <Box className="container">
          <Box className="header">
            <Typography variant="h6" className="title">
              Score
            </Typography>
            <Typography variant="h5" className="score">
              <span className="score-value">{getScore() ?? "0"}</span> /{" "}
              {getScoreTotal()}
            </Typography>
            <span>Tries : {moves}</span>
          </Box>
          <Box>
            <Typography variant="h6">Options</Typography>
            <Box className="options">
              <span>Size</span>
              <Options setOption={setOption} option={option} />
            </Box>
          </Box>
          <Button
            color="primary"
            variant="contained"
            className="button"
            onClick={handleRestart}
          >
            Restart
          </Button>
          {showModal && (
            <ScoreModal
              open={showModal}
              moves={moves}
              getScore={getScore}
              handleRestart={handleRestart}
            />
          )}
        </Box>
      </Grid>
    </>
  );
};

export default index;
