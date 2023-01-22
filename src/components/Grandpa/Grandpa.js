import React, { createContext } from 'react';
import './Grandpa.css';
import Father from './../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const RingContext = createContext("Matir Ring");
const Grandpa = () => {
    const house = 7;
    // const ring = "daimond ring";
    return (
        <RingContext.Provider value="Dadar Ring">
            <div className='grandpa'>
            <h2>Grandpa</h2>
                <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;