import React from 'react';

function Userdetails(props) {
    // console.log(props)
    const displayDetails = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5CEBD',
        width: '200px',
        height: '150px',
        borderRadius: '10px',
        marginBottom: '20px',
        color: '#568587'
    }
    return (
        <div style={displayDetails}>
            <h4 style={{ lineHeight: '0' }}>{props.name}</h4>
            <h5 style={{ lineHeight: '0' }}>{props.email}</h5>
            <h6 style={{ lineHeight: '0' }}>{props.street}</h6>
        </div>
    );
}

export default Userdetails;