import React, { useState } from 'react';
import userInstagram from 'user-instagram'
const MyComponent = () => {

    const [text, setText] = useState( null );

    const onChange = event => {
        setText(event.target.value)
    }

    const onClick = () => {
        userInstagram(text) // Same as getUserData()
            .then(console.log)
            .catch(console.error);
    }

    return (
        <div>
            <div className="searchBar">
                <div className="ui action input">
                    <input
                        type="text"
                        placeholder="Instagram @"
                        autoComplete="off"
                        autoFocus="on"
                        style={{
                            fontSize: '25px'
                        }}
                        onChange={onChange}
                    />
                    <button
                        className="ui icon button"
                        onClick={onClick}
                    >
                        <i
                            className="search icon"
                            style={{
                                width: '50px'
                            }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
