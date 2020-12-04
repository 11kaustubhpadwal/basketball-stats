import React, { useEffect, useState } from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import PlayerInfo from "./PlayerInfo";
import Loading from "../shared/Loading";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getPlayers,
  searchPlayer,
  playersSearchPagination,
  getPlayerStats,
} from "../../actions/playerActions";

const Players = ({
  players,
  getPlayers,
  searchPlayer,
  playersSearchPagination,
  getPlayerStats,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [userInput, setUserInput] = useState("");

  // Get all players info
  useEffect(() => {
    if (userInput !== "") {
      playersSearchPagination(currentPage, userInput);
    } else {
      getPlayers(currentPage);
    }
    //eslint-disable-next-line
  }, [currentPage]);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Grid.Container xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1899/1899248.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          All basketball players from major leagues
        </Text>
      </Grid>
      {!players.loading && players.error === null && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "3% 1.5% 1.5%" }}>
          <Input
            clearable
            placeholder="e.g. lebron james"
            value={userInput}
            onChange={handleSearch}
            onClearClick={() => {
              getPlayers(currentPage);
            }}
          />
          <Button
            type="secondary"
            ghost
            style={{ marginLeft: "20px" }}
            onClick={() => {
              searchPlayer(userInput);
            }}
          >
            Search
          </Button>
        </Grid>
      )}
      {!players.loading && players.error !== null && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "2% 1.5%" }}>
          <Text h3 type="error">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/645/645881.svg"
              style={{ width: "30px", marginRight: "10px" }}
              alt="icon"
            />
            {players.error}
          </Text>
        </Grid>
      )}
      {players.loading && (
        <Grid
          xs={24}
          md={24}
          lg={24}
          style={{ margin: "1.5% 1.5% 0", textAlign: "center" }}
        >
          <Loading />
        </Grid>
      )}
      {players.players.data !== undefined && players.players.data.length <= 0 && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "2% 1.5%" }}>
          <Text h3 type="error">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/645/645881.svg"
              style={{ width: "30px", marginRight: "10px" }}
              alt="icon"
            />
            No player named <span style={{ color: "black" }}>{userInput}</span>{" "}
            found. Please search for another player.
          </Text>
        </Grid>
      )}
      {/* Row 1 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(0, 4)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 2 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(4, 8)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 3 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(8, 12)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 4 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(12, 16)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 5 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(16, 20)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 6 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(20, 24)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {/* Row 7 */}
      {players.players.data !== undefined &&
        players.players.data.length > 0 &&
        players.players.data
          .slice(24, 25)
          .map((player, index) => (
            <PlayerInfo
              player={player}
              key={index}
              getPlayerStats={getPlayerStats}
              players={players}
            />
          ))}
      {players.players.data !== undefined &&
        players.players.meta !== undefined &&
        players.players.data.length > 0 && (
          <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
            <Pagination
              count={players.players.meta.total_pages}
              initialPage={currentPage}
              page={currentPage}
              onChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Grid>
        )}
    </Grid.Container>
  );
};

Players.propTypes = {
  players: PropTypes.object.isRequired,
  getPlayers: PropTypes.func.isRequired,
  searchPlayer: PropTypes.func.isRequired,
  playersSearchPagination: PropTypes.func.isRequired,
  getPlayerStats: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps, {
  getPlayers,
  searchPlayer,
  playersSearchPagination,
  getPlayerStats,
})(Players);
