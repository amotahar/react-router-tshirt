import React from 'react';
import Myself from '../MySelf/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({house}) => {
    return (
        <div>
            <h4>Father</h4>
            <p> <small>House: {house}</small> </p>
            <section className='flex'>
                <Myself house={house} />
                <Brother house={house}  />
                <Sister/>
            </section>
        </div>
    );
};

export default Father;