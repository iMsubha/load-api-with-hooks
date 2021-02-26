import React from 'react';

function Userdetails(props) {
    // console.log(props)
    const displayDetails = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#c0c0c0',
        width: '200px',
        height: '150px',
        borderRadius: '10px',
        marginBottom: '20px'
    }
    return (
        <div style={displayDetails}>
            <h4>{props.name}</h4>
            <h5>{props.email}</h5>
            <h6>{props.street}</h6>
        </div>
    );
}

export default Userdetails;