import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle,
  Typography,
} from "@mui/material";

const index = ({ open, moves, getScore, handleRestart }) => {
  return (
    <Dialog open={open} onClose={handleRestart} className="modalBox">
      <DialogTitle>
        <h2 id="parent-modal-title" align="center">
          Congratulations &#127881;
        </h2>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="h6" component="h6">
            Well done on finishing the game:-
          </Typography>
          <Typography>
            <strong>You Moves :-</strong> {moves}
          </Typography>
          <Typography>
            <strong>Your Score :-</strong> {getScore() ?? "0"}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRestart} variant="contained">
          Let's Replay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default index;
