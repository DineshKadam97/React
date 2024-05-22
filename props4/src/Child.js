import React from 'react';

export default function Child(props) {
    return (
        <div>
            <h1>Inside Child</h1>
            <h1>{props.value}</h1>
            <button onClick={props.increase}>Increase</button>
            <button onClick={props.decrease}>Decrease</button>
            <h1>{props.show}</h1>

        </div>
    );
}
