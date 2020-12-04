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
          <p>Total games played : {stats.response1.meta.total_count}</p>
          <strong>Average stats for 2018 season : </strong>
          <p>
            Points :{" "}
            {stats.response2.data[0].pts !== undefined
              ? stats.response2.data[0].pts
              : "N/A"}
          </p>
          <p>
            Offensive rebounds :{" "}
            {stats.response2.data[0].oreb !== undefined
              ? stats.response2.data[0].oreb
              : "N/A"}
          </p>
          <p>
            Defensive rebounds :{" "}
            {stats.response2.data[0].dreb !== undefined
              ? stats.response2.data[0].dreb
              : "N/A"}
          </p>
          <p>
            Turnover :{" "}
            {stats.response2.data[0].turnover !== undefined
              ? stats.response2.data[0].turnover
              : "N/A"}
          </p>
        </Modal.Content>
      )}
      <Modal.Action
        passive
        onClick={() => {
          setState(false);
          window.location.reload();
        }}
      >
        Back
      </Modal.Action>
    </Modal>
  );
};

export default PlayerStats;
