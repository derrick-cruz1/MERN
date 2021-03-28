import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [ playerName, setPlayer] = useState("");
    const [ preferredPosition, setPreferredPosition] = useState("");
    const [gameOne, setGameOne] = useState("Undecided");
    const [gameTwo, setGameTwo] = useState("Undecided");
    const [gameThree, setGameThree] = useState("Undecided");
    const [ errs, setErrs] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:7500/api/players", {
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
                navigate("/players/list");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1> Add Player</h1>
            <form onSubmit = {submitHandler}>
                <div>
                   <label>Player Name:</label>
                    <input type="text"
                    name = "playerName"
                    value = {playerName}
                    onChange = { (e) => setPlayer(e.target.value) }
                    />
                    {
                        errs.Author ? 
                        <span className ="error-text">{errs.player.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Preferred Position:</label>
                    <input type="text"
                    name = "preferredPosition"
                    value = {preferredPosition}
                    onChange = { (e) => setPreferredPosition(e.target.value) }
                    />
                    {
                        errs.Author ? 
                        <span className ="error-text">{errs.player.message}</span>
                        : null
                    }
                </div>
                <div>
                    <button onClick = {() => navigate("/players/list")}>Submit</button>
                    <button onClick = {() => navigate("/players/list")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default New;