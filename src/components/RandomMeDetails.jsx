import React from 'react';

const RandomMeDetails = (props) => {
    console.log(props)

    const { gender } = props.random;
    const { title, first, last } = props.random.name;
    const { thumbnail } = props.random.picture;
    //console.log(some)
    return (
        <div>
            <div>
                <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={thumbnail} />
            </div>
            <div>
                <h1 style={{ textTransform: 'capitalize' }}>{gender}</h1>
                <h3>{title} {first} {last}</h3>
                <p>Phone: {props.random.phone}</p>
            </div>
        </div>
    );
};

export default RandomMeDetails;