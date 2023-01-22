import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';

const Friend = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Frined</h4>
            <p> <small>Ring: {ring}</small> </p>
        </div>
    );
};

export default Friend;