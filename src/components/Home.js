import React, { useState } from 'react';
import Profile from './Profile'

const Home = () => {

    const [atHome, setAtHome] = useState( true );
    const [username, setUsername] = useState( '' );

    const onChange = event => {
        setUsername( event.target.value.trim() )
    }
    const onClick = () => {
        if ( username === '' ) {
            alert( 'Enter a username first.' )
            return;
        }

        setAtHome( false )
    }
    return (
        <div>
            { atHome ? <div className="searchBar">
                    <div className="ui action input">
                        <input
                            type="text"
                            placeholder="Instagram @"
                            autoComplete="off"
                            autoFocus="on"
                            style={ {
                                fontSize: '25px'
                            } }
                            onChange={ onChange }
                        />
                        <button
                            className="ui icon button"
                            onClick={ onClick }>
                            <i
                                className="search icon"
                                style={ {
                                    width: '50px'
                                } }
                            />
                        </button>
                    </div>
                </div>
                : <Profile username={ username }/> }
        </div>
    );
};

export default Home;
