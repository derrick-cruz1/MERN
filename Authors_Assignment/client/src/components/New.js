import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [ Author, setAuthor] = useState("");
    const [ errs, setErrs] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:7000/api/authors", {
            Author: Author,
        })
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors);
                    setErrs(res.data.errors);
                }
                else {
                console.log(res.data);
                navigate("/authors");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1> Add a new author</h1>
            <form onSubmit = {submitHandler}>
                <div>
                   <label>Name:</label>
                    <input type="text"
                    name = "Author"
                    value = {Author}
                    onChange = { (e) => setAuthor(e.target.value) }
                    />
                    {
                        errs.Author ? 
                        <span className ="error-text">{errs.Author.message}</span>
                        : null
                    }
                </div>
                <div>
                    <button type ="submit">Submit</button>
                    <button onClick = {() => navigate("/authors")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default New;