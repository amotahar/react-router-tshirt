import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p> <small>House: {house}</small> </p>
            <p> <small>Money: {money}</small> </p>
            <button onClick={() => setMoney(money + 2000)}>Add 2000</button>
        </div>
    );
};

export default Sister;