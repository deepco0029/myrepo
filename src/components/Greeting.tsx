import React from 'react';

type GreetingPros = {
    name: string
    mark: string
    age: number
    color: string
    isGood: boolean
}

function Greeting(user: GreetingPros) {
    return (
        <div style={{ color: user.color }}>
            {user.isGood ? <b>*</b> : null} Hello, {user.name}, {user.mark}, {user.age}
        </div>
    )
}

Greeting.defaultProps = {
    age: "20",
    color: 'blue'
}

export default Greeting