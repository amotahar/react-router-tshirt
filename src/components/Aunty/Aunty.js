import React from 'react';
import Cousin from './../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p> <small>House: {house}</small> </p>
            <section className='flex'>
            <Cousin/>
            <Cousin/>
            </section>
        </div>
    );
};

export default Aunty;