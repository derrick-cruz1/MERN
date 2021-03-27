import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Details = (props) => {
    const [ author, setAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:7000/api/authors/`+ props.id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    return (
        <div>
            <h1> Author:</h1>
            <table>
                <tr>
                    <td>
                        {author.Author}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Details;