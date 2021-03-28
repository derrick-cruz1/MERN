import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
const [allPlayers, setAllPlayers] = useState([]);
const [ playerName, setPlayer] = useState("");
const [ preferredPosition, setPreferredPosition] = useState("");
const [gameOne, setGameOne] = useState("Undecided");
const [gameTwo, setGameTwo] = useState("Undecided");
const [gameThree, setGameThree] = useState("Undecided");
const [ errs, setErrs] = useState({});

    useEffect (() => {
        axios.get("http://localhost:7500/api/players")
            .then((res) => {
                console.log(res.data);
                setAllPlayers(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    const actionsPlayer = (playerId) => {
        axios.put(`http://localhost:7500/api/players/` + playerId, {
        playerName: playerName,
        preferredPosition: preferredPosition,
        gameOne: gameOne,
        gameTwo: gameTwo,
        gameThree: gameThree,
    })
        .then((res) => {
            if(res.data.errors) {
                console.log(res.data.errors);
                setErrs(res.data.errors);
            }
            else {
            console.log(res.data);
            navigate("/status/game/1");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            {/* <Link to ={`/players/list`} > List </Link>
            <Link to ={`/players/addplayer`} > Add Player </Link> */}
            <table>
                <thead>
                    <th>Player Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allPlayers.map((players, index) => (
                        <tr>
                            <td>
                                <Link to ={`/players/${players._id}`} > {players.playerName}</Link>
                            </td>
                            <td>
                            <button onClick = { () => actionsPlayer(players._id) }>Undecided</button>
                            <button onClick = { () => actionsPlayer(players._id) }>Playing</button>
                            <button onClick = { () => actionsPlayer(players._id) }>Not Playing</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Edit;