import React, { Component } from "react";
import axios from "axios";
import Game from "./Game";
import InfiniteScroll from "react-infinite-scroll-component";

export default class GamesList extends Component {
  state = {
    games: [],
    limit: 30,
    startIndex: 1
  };
  componentDidMount = () => {
    axios.get(`/api/games?startIndex=${this.state.startIndex}`).then(res => {
      this.setState({ games: res.data });
    });
  };
  handleMore = () => {
    this.setState({ startIndex: this.state.startIndex + this.state.limit });
    axios.get(`/api/games?startIndex=${this.state.startIndex}`).then(res => {
      this.setState({ games: this.state.games.concat(res.data) });
    });
  };

  render() {
    const { games } = this.state;
    console.log(games);
    return (
      <div className="games">
        <InfiniteScroll
          dataLength={games.length} //This is important field to render the next data
          next={this.handleMore}
          hasMore={true}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {games.map(game => (
            <Game key={game.id} game={game} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
