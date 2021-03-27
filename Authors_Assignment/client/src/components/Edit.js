import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [ Author, setAuthor] = useState("");
    const [ errs, setErrs] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:7000/api/authors/`+ props.id)
            .then((res) => {
                console.log(res.data);
                //setAuthor(res.data);
                let author = res.data;
                setAuthor(author.Author);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:7000/api/authors/`+props.id, {
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
            <h1> Edit author</h1>
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
                    <button type ="submit">Update Author</button>
                    <button onClick = {() => navigate("/authors")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;