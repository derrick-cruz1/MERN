import React from 'react';
import { navigate} from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <div>
                <button onClick= {() => navigate("/authors/new")}>Add an author</button>
            </div>
        </div>
    )
}

export default Header;