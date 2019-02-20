import React from "react";


export default function Game({ game }) {
    const gameCover = game.cover ? <img src={game.cover.url} alt="" /> : <img src="./default.gif" alt="" />
    return (
        <div>
            <h1>{game.name}</h1>
            {gameCover}
        </div>
    );
}
