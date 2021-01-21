import React, { useEffect, useState } from 'react';
import userInstagram from 'user-instagram';

const Profile = ( props ) => {

    const [data, setData] = useState( null );

    useEffect( () => {
        userInstagram( props.username ) // Same as getUserData()
            .then( setData )
            .catch( console.error );
    }, [props.username] );

    if ( data === null ) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Username: { props.username }</h1>
        </div>
    );
};

export default Profile;
