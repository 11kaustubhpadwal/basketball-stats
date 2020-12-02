import React, { useEffect, useState } from "react";
import { Grid, Text, Input, Button, Pagination } from "@geist-ui/react";
import GameInfo from "./GameInfo";
import Loading from "../shared/Loading";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGames } from "../../actions/gameActions";

const Games = ({ games, getGames }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get all games info
  useEffect(() => {
    getGames(currentPage);
    //eslint-disable-next-line
  }, [currentPage]);

  return (
    <Grid.Container xs={24} md={24} lg={24} style={{ padding: "0 5% 3%" }}>
      <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
        <Text h3>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/140/140493.svg"
            style={{ width: "30px", marginRight: "10px" }}
            alt="icon"
          />
          Most famous and iconic games of the modern times
        </Text>
      </Grid>
      {!games.loading && games.error === null && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "3% 1.5% 1.5%" }}>
          <Input clearable placeholder="e.g. lakers" />
          <Button type="secondary" ghost style={{ marginLeft: "20px" }}>
            Search
          </Button>
        </Grid>
      )}
      {!games.loading && games.error !== null && (
        <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
          <Text h3 type="error">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/645/645881.svg"
              style={{ width: "30px", marginRight: "10px" }}
              alt="icon"
            />
            {games.error}
          </Text>
        </Grid>
      )}
      {games.loading && (
        <Grid
          xs={24}
          md={24}
          lg={24}
          style={{ margin: "1.5% 1.5% 0", textAlign: "center" }}
        >
          <Loading />
        </Grid>
      )}
      {/* Row 1 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(0, 4)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 2 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(4, 8)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 3 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(8, 12)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 4 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(12, 16)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 5 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(16, 20)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 6 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(20, 24)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {/* Row 7 */}
      {games.games.data !== undefined &&
        games.games.data.length > 0 &&
        games.games.data
          .slice(24, 25)
          .map((game, index) => <GameInfo game={game} key={index} />)}
      {games.games.data !== undefined &&
        games.games.meta !== undefined &&
        games.games.data.length > 0 && (
          <Grid xs={24} md={24} lg={24} style={{ margin: "0 1.5%" }}>
            <Pagination
              count={games.games.meta.total_pages}
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

Games.propTypes = {
  games: PropTypes.object.isRequired,
  getGames: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps, { getGames })(Games);
