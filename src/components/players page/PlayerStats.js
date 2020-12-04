import React from "react";
import { Modal } from "@geist-ui/react";

const PlayerStats = ({ state, closeHandler, setState }) => {
  return (
    <Modal open={state} onClose={closeHandler}>
      <Modal.Title>Player Statistics</Modal.Title>
      <Modal.Subtitle>Season - Current</Modal.Subtitle>
      <Modal.Content></Modal.Content>
      <Modal.Action passive onClick={() => setState(false)}>
        Back
      </Modal.Action>
    </Modal>
  );
};

export default PlayerStats;
