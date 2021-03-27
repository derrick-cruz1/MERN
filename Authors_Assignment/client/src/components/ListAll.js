import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const ListAll = (props) => {
const [allAuthors, setAllAuthors] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:7000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAllAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:7000/api/authors/` + authorId)
        .then((res) => {
            console.log(res.data);
            setAllAuthors(allAuthors.filter((authorElement) => authorElement._id !== authorId))
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1> We have quotes by: </h1>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions Availiable</th>
                </thead>
                <tbody>
                    {
                        allAuthors.map((authors, index) => (
                        <tr>
                            <td>
                                <Link to ={`/authors/${authors._id}`} > {authors.Author}</Link>
                            </td>
                            <td>
                                <Link to ={`/authors/${authors._id}/edit`} > <button>Edit</button></Link>
                                <button onClick = { () => deleteAuthor(authors._id) }>Delete</button>
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