import React from 'react';

const Stats = (props) => {      //stateless function

    const totalPlayers = props.players.length;      //total number of the players, players from the values in the App.js
    const totalPoints = props.players.reduce((total, player) => {       //reduce method ends up with an accumulated value
        return total + player.score;
    }, 0);  //initialize a total to be 0

    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Players:</td>
                <td>{ totalPlayers }</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;