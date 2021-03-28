import React from 'react';
import { navigate} from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <div>
                <button onClick= {() => navigate("/players/list")}>Manage Players</button>
                <button onClick= {() => navigate("/status/game/1")}>Manage Player Status</button>
            </div>
        </div>
    )
}

export default Header;