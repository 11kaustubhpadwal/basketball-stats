import React, { useEffect } from "react";
import { Modal } from "@geist-ui/react";

const PlayerStats = ({
  state,
  closeHandler,
  setState,
  getPlayerStats,
  playerId,
  players,
}) => {
  const { stats, statsLoading, error } = players;

  useEffect(() => {
    getPlayerStats(playerId);
    //eslint-disable-next-line
  }, []);

  return (
    <Modal open={state} onClose={closeHandler}>
      {statsLoading && <Modal.Title>Retrieving all stats ... </Modal.Title>}
      {!statsLoading && error !== null && <Modal.Title>{error}</Modal.Title>}
      {!statsLoading && stats !== null && (
        <Modal.Title>Player Statistics</Modal.Title>
      )}
      {!statsLoading && stats !== null && (
        <Modal.Subtitle>All seasons</Modal.Subtitle>
      )}
      {!statsLoading && stats !== null && (
        <Modal.Content>
          <p>Total games played : {stats.meta.total_count}</p>
        </Modal.Content>
      )}
      <Modal.Action passive onClick={() => setState(false)}>
        Back
      </Modal.Action>
    </Modal>
  );
};

export default PlayerStats;
