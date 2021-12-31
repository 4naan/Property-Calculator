import React, { useState } from "react";
import Itemisation from './Itemisation';
import RentTable from './RentTable';
import Realm from "realm";
import { v4 as uuidv4 } from 'uuid'


const PropertySchema = {
    name: "Property",
    properties: {
        _id: uuidv4(),
        Address: "string",
        Buyprice: "int",
        Deposit: "int",
        Rent: "int"
    },
    primaryKey: "_id",
};
function Calculator() {
    const [house, setHouse] = useState({});
    return (
        <>
            <div className="App">
                <Itemisation house={house} passProps={setHouse} />
                <RentTable house={house} />
                <h1>{house.buyPrice}</h1>
                <h1>{house.state}</h1>
            </div>
        </>
    );
}
export default Calculator;


