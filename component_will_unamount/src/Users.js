import React from 'react';

export class Users extends React.Component
{
    componentWillUnmount()
    {
        console.warn("componentWillUnmount")
        alert("Component is removed from the ReactDOM")
    }

    render()
    {
        return(
            <div>
                <h1>Component is here</h1>
            </div>
        )
    }
}