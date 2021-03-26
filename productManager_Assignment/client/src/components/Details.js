import React, {useEffect, useState} from 'react';
import { Link, Navigate} from '@reach/router';
import axios from 'axios';
// import productController from '../../../server/controllers/product.controller';

const Details = (props) => {
    const [ detail, setDetails] = useState({});

    
    return (
        <div>
            <h1>Details Component</h1>
            {props.id}
            
        </div>
    )
}

export default Details;