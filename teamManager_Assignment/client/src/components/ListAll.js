import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const ListAll = (props) => {
const [allPlayers, setAllPlayers] = useState([]);

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

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:7500/api/players/` + playerId)
        .then((res) => {
            console.log(res.data);
            setAllPlayers(allPlayers.filter((playerElement) => playerElement._id !== playerId))
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <Link to ={`/players/list`} > List </Link>
            <Link to ={`/players/addplayer`} > Add Player </Link>
            <table>
                <thead>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions Availiable</th>
                </thead>
                <tbody>
                    {
                        allPlayers.map((players, index) => (
                        <tr>
                            <td>
                                <Link to ={`/players/${players._id}`} > {players.playerName}</Link>
                            </td>
                            <td>
                                {players.preferredPosition}
                            </td>
                            <td>
                                <Link to ={`/authors/${players._id}/edit`} > <button>Edit</button></Link>
                                <button onClick = { () => deletePlayer(players._id) }>Delete</button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAll;