import React, {useEffect, useState} from 'react';
import { Link, navigate, Navigate} from '@reach/router';
import axios from 'axios';
import Details from './Details';

const ListAll = (props) => {
    const [ allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/api/product")
        .then((res) => {
            console.log(res.data);
            setAllProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <div>
            <h1>All Products:</h1>
            <div>
                {
                    allProducts.map((product, index) => (
                        <button onClick={ () =>navigate("/product/:id")}>
                        <h3>{product.title}</h3>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default ListAll;