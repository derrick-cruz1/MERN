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
                    <h1>    
                        <Link to={`/product/${product._id}`} > {product.title} </Link>
                    </h1>
                    ))
                }
            </div>
        </div>
    )
}

export default ListAll;