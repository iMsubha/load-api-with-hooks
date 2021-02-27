import React, { useState, useEffect } from 'react'
import RandomMeDetails from './RandomMeDetails'

function RandomMe(props) {
    const [random, setRandom] = useState([])
    const randomMeDisplay = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '40px',
        height: '200px',
        marginBottom: '100px',
        width: '250px',
        borderRadius: '20px'
    }
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0]);
                setRandom(data.results[0])
            }).catch(err => console.log(err))
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <div style={randomMeDisplay}>
                <RandomMeDetails random={random} />

            </div>
        </div>
    );
}

export default RandomMe;