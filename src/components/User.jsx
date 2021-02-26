import React, { useState, useEffect } from 'react';
import Userdetails from './Userdetails';

function User() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    const displayUser = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '10px',
        margin: '40px'
    }
    return (

        <div>
            <div style={{ backgroundColor: 'cyan', marginBottom: '20px' }}>
                <button onClick={() => setCount(count + 1)}>Plus</button>
                <p>Count: {count}</p>
                <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>Minus</button>
            </div>
            <h3>JSON placeholder API</h3>
            <div style={displayUser}>
                {
                    users.map(user => <Userdetails key={user.id} name={user.name} email={user.email} street={user.address.street} />)
                }
            </div>
        </div >
    );
}

export default User;