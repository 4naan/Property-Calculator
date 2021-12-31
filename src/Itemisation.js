import React, { useState } from "react";

function Itemisation({ house, passProps }) {

    const [buyPrice, setBuyPrice] = useState("");
    const [deposit, setDeposit] = useState("");
    const [state, setstate] = useState("");

    //testing passing props
    const handleProps = () => {
        const propToParent = { buyPrice: buyPrice, deposit: deposit, state: state };
        passProps(propToParent);
    }
    //end
    const handleChangeBuyPrice = (e) => {
        setBuyPrice(roundToTwo(e.target.value));
    }
    const handleChangeDeposit = (e) => {
        setDeposit(roundToTwo(e.target.value));
    }
    const handleStatesFound = (e) => {
        setstate(e.target.value)
    };
    const stateStamp = { VIC: 0.07, QLD: 0.025, NSW: 0.05, WA: 0.05, SA: 0.05, ACT: 0.05, NT: 0.05, "": 0 };
    const stateList = ["VIC", "QLD", "NSW", "WA", "SA", "ACT", "NT"];
    let statesFound = stateList.filter(states => states !== state);
    const selectorElement = () => {
        if (state === "") {
            return <option value="">Please Select an Option</option>
        } else {
            return <option value={state}>{state}</option>
        }
    }
    let buyPriceEqu = parseInt(buyPrice);
    let realValue = 1500 + buyPriceEqu + (buyPriceEqu * stateStamp[state]);
    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }
    if (deposit < realValue * 0.2) {
        realValue = realValue + 1000;
    }
    const LMI = () => {
        if (deposit < realValue * 0.2) {
            return (<li>Lender's Mortgage Insurance: $1000</li>)
        }
    }



    return (
        <div onChange={handleProps}>
            <h1>UtzonWeb 1.0.01</h1>
            <label htmlFor="buyPrice">House Price: </label>
            <input min="0" step="0.01" id="buyPrice" type="number" value={buyPrice} onChange={handleChangeBuyPrice} />
            <br />
            <br />
            <label htmlFor="deposit">Deposit: </label>
            <input min="0" step="0.01" id="deposit" type="number" value={deposit} onChange={handleChangeDeposit} />
            <br />
            <h5>If blank, your deposit needed will be calculated</h5>
            <label htmlFor="States">Select property state: </label>
            <select id="States" value={state} onChange={handleStatesFound}>
                {selectorElement()}
                {statesFound.map(s => {
                    return <option value={s}>{s}</option>
                })}
            </select >
            <h2>The real value of your purchase is: ${roundToTwo(realValue)}</h2>
            <div>
                <h2>Itemised Breakdown</h2>
                <ul>
                    <li>Real value: ${roundToTwo(realValue)}</li>
                    <li>Stamp Duty: ${roundToTwo(buyPriceEqu * stateStamp[state])}</li>
                    <li>Conveyencer fees: $1500</li>
                    {LMI()}
                    <li>Required Deposit: ${roundToTwo(realValue * 0.2)}</li>
                </ul>
            </div>
        </div >
    )
}
export default Itemisation;

