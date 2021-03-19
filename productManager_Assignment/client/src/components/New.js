import React, {useEffect, useState} from 'react';
import { Link, Navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [ title, setTitle] = useState("");
    const [ price, setPrice] = useState("");
    const [ description, setDescription] = useState ("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:9000/api/product", {
            title: title,
            price: price,
            description: description,
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>New Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>    
                    <input type = "text"
                        name = "title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                    /> 
                </div>
                <div>
                    <label>Price: </label>    
                    <input type = "number"
                        name = "price"
                        min="1"
                        value={price}
                        onChange={ (e) => setPrice(e.target.value)}
                    /> 
                </div>
                <div>
                    <label>Description: </label>    
                    <input type = "text"
                        name = "description"
                        value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                    /> 
                </div>
                <div>
                    <button type ="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default New;